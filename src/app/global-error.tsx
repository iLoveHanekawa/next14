'use client'

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
    useEffect(() => {
        console.log(error);
    }, [error])
    return (
        <html>
            <body>
                <div>
                    <h2>Error in layout</h2>
                    <button onClick={() => {
                        reset();
                    }}>Retry</button>
                </div>
            </body>
        </html>
    );
}