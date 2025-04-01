import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contatos - Aprendendo NextJS",
    description: "Entre e conta com o Sujeito Programador",
    keywords: ['HTML', 'CSS', 'JavaScript', 'Programação'],
    openGraph: {
      images: ['https://images.ctfassets.net/vwq10xzbe6iz/5sBH4Agl614xM7exeLsTo7/9e84dce01735f155911e611c42c9793f/rest-api.png']
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      }
    }
  };

export default function Contatos(){
    return(
        <div>
            <h1>Página de contatos</h1>
            <span>(xx) 95482-1254</span>
        </div>
    )
}