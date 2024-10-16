import { NextRequest, NextResponse } from "next/server";
import { getProdutoPorCodigoDB, deleteProdutoDB } from "@/bd/useCases/produtoUseCases";



type FindByCodigo = {
	codigo: string;
};

export async function GET(request: NextRequest, context: { params: FindByCodigo }) {
    try {
        let produto = await getProdutoPorCodigoDB(Number(context.params.codigo));
        return NextResponse.json(produto,{ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { status: 'Error', message: "Erro: " + err },
            { status: 404 }
        );
    }
}

export async function DELETE(request: NextRequest, context: { params: FindByCodigo }) {
    try {
        let resultado = await deleteProdutoDB(Number(context.params.codigo));
        return NextResponse.json({status : "success", message : resultado},{ status: 200 });
    } catch (err) {
        return NextResponse.json(
            { status: 'Error', message: "Erro: " + err },
            { status: 404 }
        );
    }
}