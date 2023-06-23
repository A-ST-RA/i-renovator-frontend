import { useEffect, useState } from 'react';

function useToken() {
    const [token, setToken] = useState('');

    useEffect(() => {
        setToken(localStorage.getItem('token') || '');
    }, [localStorage.getItem('token')]);

    return { token };
}

export default useToken;
