import { NextResponse } from "next/server";

export async function GET(request:Request) {
    return NextResponse.json({message: 'Bem vindo à API e testes'})
}