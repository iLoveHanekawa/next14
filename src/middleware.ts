import { redirect } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log('middleware hit');
    return NextResponse.rewrite('http://localhost:3000/pokemons');
    // return NextResponse.redirect('http://localhost:3000/pokemons');
}

export const config = {
    matcher: '/settings'
}
