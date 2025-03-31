'use client'
import { useState, useEffect } from "react";

interface DataPorps {
    id: number;
    name: string;
    full_name: string;
    owner: {
        id: string;
        avatar_url: string;
        url: string;
    }
}

export default function RepositorioCS() {
    const [repos, setRepos] = useState<DataPorps[]>([])

    useEffect(() => {
        function getData(){
            fetch('https://api.github.com/users/YuudaiNoboru/repos')
            .then(response => response.json())
            .then((data: DataPorps[]) => {
                setRepos(data);
            })
        }
        getData();
    }, [])


    return (
        <main>
          <h1>Página Home</h1>
          <span>Seja bem vindo a página home</span>
          <br />
    
          <h3>Meus repositórios</h3>
          {repos.map((item) => (
            <div key={item.id}>
              <strong>Repositório:</strong><a>{item.name}</a>
              <br /><br />
            </div>
          ))}
        </main>
      )
    
}