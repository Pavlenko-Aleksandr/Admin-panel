import React from 'react';
import { useUsers } from '../../hooks/useUsers';
import User from '../User/User';
import { Link } from 'react-router-dom';

export default function Contacts() {
    const { users, deleteUser } =  useUsers();
    
    
    return (
        <>
            <h1>Users List</h1>
            <div>
                <Link to="/add">ADD User</Link>
            </div>
            <ul>
            {users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    onDelete={deleteUser}
                />))}
            </ul>
        </>
        
    );
    
}
