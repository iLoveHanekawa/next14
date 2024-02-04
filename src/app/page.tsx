import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href={'/settings'}>Settings</Link>
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link scroll={false} href={'/pokemons'}>Pokemons</Link>
        <Link href={'/pokemons#raticate'}>Raticate</Link>
        <Link href={'/dashboard/some'}>Some</Link>
    </main>
  );
}
