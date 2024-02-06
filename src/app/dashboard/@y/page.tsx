import Link from "next/link";

export default function Page(): JSX.Element {
    return <div className="text-red-500">
        <Link href='/dashboard/ya'>goto ya</Link>
        <br />
        <Link href='/dashboard/yb'>goto yb</Link>
    </div>
}