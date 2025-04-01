interface PageDetailProps {
    params: {
        id: string;
    }
}

export default function RepositorioID({ params }: PageDetailProps){
    return (
        <div>
            <h1>Página detalhe do repositório { params.id }</h1>
        </div>
    )
}