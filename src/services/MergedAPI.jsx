import { useState, useEffect } from 'react';


export default function SpaceData () {
    const urls = {
        spacecraft: 'https://ll.thespacedevs.com/2.2.0/spacecraft/',
        spacestations: 'https://ll.thespacedevs.com/2.2.0/spacestation/'
    }

    const [results, setResults] = useState({});
    
    const fetchApis = async () => {
        try {
        const responses = await Promise.all(Object.entries(urls).map(async ([ key, url ]) => {
            const res = await fetch(url)
            return [ key, (await res.json()).results ]
        }))
    
        return Object.fromEntries(responses)
        } catch (err) {
        console.error(err)
        }
    }
    
    useEffect(() => {
        fetchApis().then(setResults)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchApis])

    console.log('results of fetchApis', results)

    return (
        <div>
            
        </div>
    );
}