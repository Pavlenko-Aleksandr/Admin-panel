import { useEffect, useState } from "react";
import Axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/users/';


export function useUsers() {
    const [users, setUsers] = useState([])

    useEffect (() => {
        Axios.get(URL).then(({data}) => setUsers(data));
    }, []);


    return {
        users
    }
}