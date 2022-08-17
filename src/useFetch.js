import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {        
            fetch(url, { signal: abortCont.signal })
                .then(res => {                      // this is a promis
                    if (!res.ok) {
                        throw Error('could not fetch data for that resource...');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setisPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name == 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setisPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => {
            abortCont.abort();
        }
    }, [url]);  // this array decides when this data need to run

    return { data, isPending, error };
}

export default useFetch;