import { useState, useEffect } from 'react';
//import axios from 'axios';
import axios from '../api/axios.js'

const useFetch = (url='/cart', options = {},method = 'get') => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios[method](url, options);
        console.log(response.data)
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options), method]); 
  return { data, isLoading, error };
};

export default useFetch;   