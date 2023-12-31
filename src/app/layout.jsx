import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter, Raleway } from 'next/font/google'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={raleway.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
