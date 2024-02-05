'use client'

import { ReadonlyURLSearchParams, useSearchParams, usePathname } from "next/navigation"

export default function Page(): JSX.Element {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const pathname: string = usePathname();
    const switchLocale: (locale: string) => void = (locale: string) => {
        const newPath = `/${locale}${pathname}`
        window.history.replaceState(null, '', newPath);
    }
    const list: JSX.Element[] = [];
    const params = new URLSearchParams(searchParams);
    const updateSorting: (sortOrder: string) => void = (sortOrder: string) => {
        params.set('sort', sortOrder);
        window.history.pushState(null, '', `?${params.toString()}`)
    }
    searchParams.forEach((value, key, parent) => {
        list.push(<li key={key}>{value}</li>);
    });
    
    console.log(searchParams);
    return <div>
        <button onClick={() => {
            updateSorting('asc')
        }}>Ascending</button>
        <button onClick={() => {
            updateSorting('dsc');
        }}>Descending</button>
        <button onClick={() => switchLocale('en')}>English</button>
        <button onClick={() => switchLocale('fr')}>French</button>
    </div>
}