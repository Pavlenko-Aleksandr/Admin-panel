import { useEffect, useState } from "react";
import Axios from 'axios';
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';


export function useUsers() {
    const [users, setUsers] = useState([]);
    
    useEffect (() => {
        Axios.get(URL).then(({data}) => setUsers(data));
    }, []);

    function addUser(data) {
        Axios.post(URL, {
            name: data.name,
            phone: data.phone,
            email: data.email,
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(({data}) => setUsers((users) => {return [...users, data]}));
    };

    function deleteUser(id) {
        Axios.delete(URL + id);
        setUsers(users.filter(item => item.id !== id));
     };

     function editUser(data) {
        Axios.put(URL + data.id, {
            id: data.id,
            name: data.name,
            phone: data.phone,
            email: data.email,
        }, {
            headers: {'Content-Type': 'application/json'}
        }).then(({data}) => setUsers(users.map((item) => item.id === data.id ? data : item)));
    };


    return {
        users,
        setUsers,
        addUser,
        deleteUser,
        editUser,
    }
}