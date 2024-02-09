import { RevalidateRouteSegmentConfig } from "../types/types";

export const revalidate: RevalidateRouteSegmentConfig = 50;

type Artist = {
    id: string
    name: string
}

type ArtistAPIResponse = { artists: Artist[] }

const getArtists = async(): Promise<ArtistAPIResponse | null> => {
    try {
        const res = await fetch('http://localhost:5000/artists');
        const artists: Artist[] = await res.json();
        return { artists };
    } catch (error) {
        console.log(error);    
        return null;    
    }
}

export default async function Page(): Promise<JSX.Element | null> {
    try {
        const data = await getArtists();
        return <ul>
            {data?.artists.map((artist, index) => {
                return <li key={index}>
                    <div>
                        {artist.id}
                    </div>
                    <div>
                        {artist.name}
                    </div>
                </li>
            })}
        </ul>
    } catch (error) {
        console.log(error);      
        return null;  
    }
}