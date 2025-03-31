import Link from "next/link"
import sytle from '@/components/header/header.module.css'

export function Header(){
   return(
    <header className={sytle.header}>
        <h1>Meu Site</h1>
        <Link href='/'>Home</Link><br />
        <Link href='/contatos'>Contatos</Link><br />
        <Link href='/repositorios-client-side'>Repositórios Client Side</Link><br />
        <Link href='/repositorios-server-side'>Repositórios Server Side</Link><br />
        <Link href='/dashboard'>Painel</Link>
        <hr />
    </header>
   )
}