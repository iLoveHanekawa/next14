'use client'

import { useSelectedLayoutSegments } from "next/navigation"

export const LayoutSegments: React.FC<{}> = () => {
    const segments = useSelectedLayoutSegments();
    return <ul>
        {segments.map((segment: string, index: number) => {
            return <li key={index}>Segment: {segment}</li>
        })}
    </ul>
}
