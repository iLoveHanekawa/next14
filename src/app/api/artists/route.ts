import { RevalidateRouteSegmentConfig } from "@/app/types/types";

export const revalidate: RevalidateRouteSegmentConfig = 20;

export async function GET() {
    try {
        const res = await fetch('http://localhost:5000/artists');
        const artists = await res.json();
        return Response.json({ artists });
    } catch (error) {
        console.log(error);        
    }
}
