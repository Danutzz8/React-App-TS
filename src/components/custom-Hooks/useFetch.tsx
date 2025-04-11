import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetch = <T,>(url: string): FetchState<T> & { refetch: () => void } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [trigger, setTrigger] = useState<number>(0); // Used to trigger refetch

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData, trigger]);

    const refetch = () => {
        setTrigger((prev) => prev + 1); // Increment trigger to refetch
    };

    return { data, loading, error, refetch };
};

export default useFetch;