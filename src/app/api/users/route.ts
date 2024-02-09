import { NextRequest } from "next/server";
import prisma from "../../../../db";

export async function GET() {
    const users = await prisma?.user.findMany();
    return Response.json({ users });
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.formData();
        const username = body.get("username") as (string | null);
        if(username === 'del') {
            await prisma.user.deleteMany();
            return Response.json({ users: [] });
        }
        else {
            const user = await prisma.user.create({
                data: {
                    username: username!
                }
            });
            return Response.json({ user });
        }
    } catch (error) {
        console.log(error);     
    }
}
