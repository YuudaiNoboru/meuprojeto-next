interface DataPorps{
  id: number;
  name: string;
  full_name: string;
  owner: {
    id: string;
    avatar_url: string;
    url: string;
  }
}

async function getData() {
  const response = await fetch('https://api.github.com/users/YuudaiNoboru/repos')

  return response.json()
}

export default async function Home(){
  const data: DataPorps[] = await getData()

  return(
    <main>
      <h1>Página Home</h1>
      <span>Seja bem vindo a página home</span>
      <br />

      <h3>Meus repositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório:</strong><a>{item.name}</a>
          <br /><br />
        </div>
      ))}
    </main>
  )
}