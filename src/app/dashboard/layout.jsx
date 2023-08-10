import NavDas from '@/components/NavDas'
import SideBar from '@/components/SideBar'
export default function DashboardLayout ({
  children // will be a page or nested layout
}) {
  return (
    <section>
      <NavDas />
      <SideBar />
      {children}
    </section>
  )
}
