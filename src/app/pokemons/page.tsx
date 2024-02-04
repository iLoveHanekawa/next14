import Link from 'next/link'

export default async function Page(): Promise<JSX.Element> {
    const url: string = 'https://pokeapi.co/api/v2/pokemon-species'
    const res: Response = await fetch(url);
    const data: { results: { name: string, url: string }[] } = await res.json();
    return <div>
        <ul>
            {data.results.map((pokemon, index) => {
                return <li key={index}>
                    <Link id={pokemon.name} href={pokemon.url} className="capitalize text-6xl py-4">{pokemon.name}</Link>
                </li>
            })}
        </ul>
    </div>
}