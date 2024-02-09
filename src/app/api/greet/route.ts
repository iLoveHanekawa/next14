import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies();
    cookieStore.set('hello', 'arjun');
    return Response.json({
        msg: "cookie set"
    })
}