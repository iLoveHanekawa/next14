import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    console.log(cookieStore);
    const hello = cookieStore.get('hello')?.value;
    console.log('hello in cookieStore: ' + hello);
    console.log('hello in request: ' + req.cookies.get('hello')?.value);
    const headerStore = headers();
    const authHeader = headerStore.get('Authorization');
    if(!hello) {
        return Response.json({
            res: "no one to greet"
        })
    }
    else {
        return Response.json({
            cookie: hello,
            header: authHeader
        })
    }
}