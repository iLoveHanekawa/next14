'use client'

import { useRouter } from "next/navigation"

export default function Page(): JSX.Element {
    const router = useRouter();
    return <button onClick={() => {
        router.push('/dashboard');
    }}>To Dashboard</button>
}