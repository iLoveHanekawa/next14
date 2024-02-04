import Link from 'next/link'

export default async function Page() {
    const url = 'https://pokeapi.co/api/v2/pokemon-species'
    const res = await fetch(url);
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