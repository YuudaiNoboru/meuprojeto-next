'use client'

import Image from 'next/image'
import { useState } from 'react';

interface OwenerRepoProps {
    avatar_url: string;
    name: string;
}

export function OwnerRepo({ avatar_url, name }: OwenerRepoProps) {

    const [show, setShow] = useState(false);

    return (
        <div>
            {show && (
                <>
                    <Image
                        src={avatar_url}
                        alt='Foto avatar do usuario'
                        width={24}
                        height={24}
                        style={{ borderRadius: 8 }}
                    />
                    <strong>{name}</strong>
                </>
            )}
            <br />
            <button onClick={() => setShow(!show)}>
                {show ? 'Ocultar nome' : 'Monstra nome'}
            </button>
        </div>
    )
}