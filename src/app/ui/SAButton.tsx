"use client"

import { useFormStatus } from "react-dom"

export const SAButton: React.FC = () => {
    const {pending} = useFormStatus();
    return <button type="submit" aria-disabled={pending} disabled={pending}>
        Add user
    </button>
}