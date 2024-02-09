import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { num: string } }) {
    const x: number = parseInt(params.num);
    return Response.json({
        number: x
    })
}