import { NextResponse } from "next/server";

let tarefas = ['Comprar Coca', 'Estudar NextJS']

export async function GET(request: Request){
    return NextResponse.json(tarefas)
}