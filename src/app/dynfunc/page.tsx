import { cookies } from "next/headers";
import { DynamicRouteSegmentConfig } from "../types/types";

export const dynamic: DynamicRouteSegmentConfig = 'force-dynamic';

export default async function Page() {
    try {
        const res = await fetch("http://localhost:3000/api/check", {
            credentials: "include",
            headers: {
                Authorization: 'bearer testheader',
                Cookie: cookies().toString()
            }
        });
        const data = await res.json();
        console.log(data);
        return <div>
            data
            <h2>{data.cookie}</h2>
            <h2>{data.header}</h2>
        </div>
    } catch (error) {
        console.log(error);
        return null;        
    }
}