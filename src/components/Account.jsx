import { Spot } from '@binance/connector'

const getAccount = async () => {
  try {
    const apiKey =
      '2sEIei8vX5Wc1SLiALwvt6Qnl8FFQZ6Imk6kHBICUx80iszTuHxCnPfwUpDVUJlJ'
    const apiSecret =
      'PX6IYzlcaFnD8Z3yXe4CeDnORRfzJWut97D0jNB6p0IpiOEfqUwfu0xS17l7UDRx'
    const client = new Spot(apiKey, apiSecret)

    const accountInfo = await client.userAsset()
    const btcPrice = await client.avgPrice('BTCUSDT')

    const accountData = accountInfo.data
    const btcData = btcPrice.data

    const result = [accountData, btcData]
    return result
  } catch (error) {
    console.error(error)
    return { error: 'Failed to fetch account information' }
  }
}

export default async function Account () {
  const balance = await getAccount()
  const [accountData, btcData] = balance
  const totalSum = accountData.reduce((acc, item) => {
    const itemValueInDollars = parseFloat(item.btcValuation * btcData.price)
    return acc + itemValueInDollars
  }, 0)
  console.log(balance)

  return (
    <div>
      <h1>Account Information</h1>
      {accountData?.map(item => (
        <div key={item.asset}>
          <p>
            {item.free} {item.asset} = $
            {parseFloat(item.btcValuation * btcData.price).toFixed(3)}
          </p>
        </div>
      ))}
      <p>Total : ${totalSum.toFixed(3)}</p>
    </div>
  )
}
