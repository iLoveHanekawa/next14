'use client'

import { useRouter } from "next/navigation"
import { MouseEvent } from "react";

type ModalProps = Readonly<{
    children: React.ReactNode
}>

export default function Modal({ children }: ModalProps): JSX.Element {
    const router = useRouter();
    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        router.back();
    }
    return <div>
        <button onClick={clickHandler}>Close Modal</button>
        {children}
    </div>
}
