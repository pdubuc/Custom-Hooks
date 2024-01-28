import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initialValue) {
const [isFetching, setIsFetching] = useState();
const [error, setError] = useState();
const [fetchedData, setFetchedData ] = useState(initialValue);

// Refactored this function to be very generic so it can be reused for 'data'
    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchedData(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isFetching,
        fetchedData,
        setFetchedData,
        error
      }
}