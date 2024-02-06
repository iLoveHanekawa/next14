'use client'

import { useSelectedLayoutSegments } from "next/navigation"
import React from "react"

type DashLayoutProps = Readonly<{
    children: React.ReactNode
    x: React.ReactNode
    y: React.ReactNode
}>

export default function DashLayout({ children, x, y }: DashLayoutProps): JSX.Element {
    const segs = useSelectedLayoutSegments('x');
    console.log({ segs });
    return <div>
        <div>ChildLayout</div>
        {children}
        {x}
        {y}
    </div>
}