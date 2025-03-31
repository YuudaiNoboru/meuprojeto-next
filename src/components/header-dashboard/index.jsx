import Link from "next/link"
import sytle from '@/components/header-dashboard/header-dashboard.module.css'

export function HeaderDashboard(){
   return(
    <header className={sytle.header}>
        <Link href='/dashboard/cadastro'>Cadastro de Clientes</Link><br />
        <Link href='/dashboard/settings'>Settings</Link><br />
    </header>
   )
}