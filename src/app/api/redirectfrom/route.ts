import { redirect } from "next/navigation";

export async function GET() {
    redirect('http://localhost:3000/api/redirectto');
}