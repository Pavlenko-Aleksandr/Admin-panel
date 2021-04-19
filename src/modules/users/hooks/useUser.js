import { useEffect, useState } from 'react';
import Axios from 'axios';
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export function useUser(id) {
    const [user, setUser] = useState([]);
    useEffect (() => {
        Axios.get(URL, { params: { id } }).then(({data}) => setUser(data));
    }, []);


    return { 
        user,
        setUser, 
        };
}
