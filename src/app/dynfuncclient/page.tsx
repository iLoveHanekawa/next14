'use client'

import { useEffect, useState } from "react"
type Creds = {
    cookie: string;
    header: string
}
export default function Page(): JSX.Element {
    const [creds, setCreds] = useState<Creds>({
        cookie: '',
        header: ''
    });
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getCreds = async() => {
            const res = await fetch('http://localhost:3000/api/check', {
                headers: {
                    Authorization: 'bearer authclient'
                }
            });
            const creds: Creds = await res.json();
            setLoading(false);
            setCreds(creds);
        }
        getCreds();
    }, []);
    if(loading) return <div>Loading...</div>
    else return (<div>
        <h2>{creds.cookie}</h2>
        <h2>{creds.header}</h2>
    </div>)
}
