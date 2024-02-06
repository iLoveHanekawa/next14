'use client'

import { useSelectedLayoutSegments } from "next/navigation"

export const LayoutSegments: React.FC<{}> = () => {
    const dashboardSegments = useSelectedLayoutSegments();
    return <ul>
        {dashboardSegments.map((segment: string, index: number) => {
            return <li key={index}>Custom Segment: {segment}</li>
        })}
    </ul>
}
