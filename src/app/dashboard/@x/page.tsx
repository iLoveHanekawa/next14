import Link from "next/link";

export default function Page(): JSX.Element {
    return <div className="text-green-500">
        <Link href='/dashboard/xa'>goto xa</Link>
        <br />
        <Link href='/dashboard/xb'>goto xb</Link>
    </div>
}