import { useState, useEffect } from 'react';
import axiosInstance from '../utils/Request'

axiosInstance.defaults.baseURL = 'https://fakestoreapi.com';

const useAxios = ({ url, method }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axiosInstance[method](url)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url]);

    return { response, error, loading };
};

export default useAxios;