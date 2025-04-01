import type { Metadata } from "next";
import "./globals.css";
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: "Meu Site - Aprendendo NextJS",
  description: "Site completo para praticar NextJS no curo do Sujeito Programador",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
