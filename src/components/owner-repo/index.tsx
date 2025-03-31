import Image from 'next/image'

interface OwenerRepoProps {
    avatar_url: string;
    name: string;
}

export function OwnerRepo({avatar_url, name}: OwenerRepoProps) {
    return(
        <div>
            <Image
                src={avatar_url}
                alt='Foto avatar do usuario'
                width={24}
                height={24}
            />
            <strong>{name}</strong>
        </div>
    )
}