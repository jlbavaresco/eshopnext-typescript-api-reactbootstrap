import { NextRequest, NextResponse } from "next/server";
import { getCategoriaPorCodigoDB, deleteCategoriaDB } from "@/bd/useCases/categoriaUseCases";

//req is short for request

type FindByCodigo = {
	codigo: string;
};

export async function GET(request: NextRequest, context: { params: FindByCodigo }) {
    try {
        let categoria = await getCategoriaPorCodigoDB(Number(context.params.codigo));
        return NextResponse.json(categoria,{ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { status: 'Error', message: "Erro: " + err },
            { status: 404 }
        );
    }
}

export async function DELETE(request: NextRequest, context: { params: FindByCodigo }) {
    try {
        let resultado = await deleteCategoriaDB(Number(context.params.codigo));
        return NextResponse.json({status : "success", mensage : resultado},{ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { status: 'Error', message: "Erro: " + err },
            { status: 404 }
        );
    }
}