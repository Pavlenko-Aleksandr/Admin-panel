import React from 'react';
import { useUsers } from '../../hooks/useUsers';
import User from '../User/User';

export default function Contacts() {
    const { users } =  useUsers();
        
    return (
        <>
            <h1>Users List</h1>
            <ul>
            {users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                />))}
            </ul>
        </>
        
    );
    
}
