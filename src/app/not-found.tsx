import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Página não encontrada!</h2>
            <p>Parece que essa página que você está tentando acessar não existe.</p>
            <Link href='/'>Voltar para home</Link>
        </div>
    )
}