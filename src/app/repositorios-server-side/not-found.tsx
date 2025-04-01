import Link from "next/link";

export default function NotFoundRepositorio() {
    return (
        <div>
            <h2>Repositório não encontrado!</h2>
            <p>Esse repositório não existe.</p>
            <Link href='/'>Voltar para home</Link>
        </div>
    )
}