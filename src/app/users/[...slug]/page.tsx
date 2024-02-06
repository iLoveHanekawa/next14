export default function Page({ params }: { params: { slug: string[] }}): JSX.Element {
    return <div>
        <div>Role: {params.slug[0]}</div>
        <div>ID: {params.slug[1]}</div>
    </div>
}