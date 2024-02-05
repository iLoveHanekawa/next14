'use client'

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => {}}) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div>
            <h2>Root will catch this from its children.</h2>
            <button onClick={() => {
                reset();
            }}>Retry</button>
        </div>
    );
}