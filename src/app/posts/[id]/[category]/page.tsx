export default function Page({ params }: { params: { id: string, category: string }}): JSX.Element {
    return <div>
        <h1>Category: {params.category}</h1>
        <h2>ID: { params.id }</h2>
    </div>
}