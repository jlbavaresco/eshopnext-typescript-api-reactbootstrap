import { NextRequest, NextResponse } from "next/server";
import { addCategoriaDB, getCategoriasDB, updateCategoriaDB } from "@/bd/useCases/categoriaUseCases";
import Categoria from "@/bd/entitites/Categoria.1";

//req is short for request
export async function GET(request: NextRequest) {
    try {
        const dados : Categoria[] = await getCategoriasDB();
        return NextResponse.json(dados,{ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { status: 'Error', message: "Erro: " + err },
            { status: 400 }
        );
    }
}

export async function POST(request: NextRequest) {

    const objeto : Categoria = await request.json();
    try {
         await addCategoriaDB(objeto);
        return NextResponse.json({status : "success", message : "Categoria criada"},{ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { status: 'Error', message: "Erro: " + err },
            { status: 400 }
        );
    }
}

export async function PUT(request: NextRequest) {

    const objeto : Categoria = await request.json();
    try {
         await updateCategoriaDB(objeto);
        return NextResponse.json({status : "success", message : "Categoria atualizada"},{ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { status: 'Error', message: "Erro: " + err },
            { status: 400 }
        );
    }
}