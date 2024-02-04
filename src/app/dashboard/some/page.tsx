'use client'

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation"

export default function Page(): JSX.Element {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const list: JSX.Element[] = [];
    const params = new URLSearchParams(searchParams);
    const updateSorting: (sortOrder: string) => void = (sortOrder: string) => {
        params.set('sort', sortOrder);
        window.history.pushState(null, '', `?${params.toString()}`)
    }
    searchParams.forEach((value, key, parent) => {
        list.push(<li key={key}>{value}</li>)
    });
    
    console.log(searchParams);
    return <div>
        <button onClick={() => {
            updateSorting('asc')
        }}>Ascending</button>
        <button onClick={() => {
            updateSorting('dsc');
        }}>Descending</button>
    </div>
}