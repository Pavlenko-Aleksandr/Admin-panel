import React from 'react';
import { useHistory } from 'react-router-dom';

export default function User({ user, onDelete }) {
    
    const history = useHistory();
    return (
        <li style={style}>
            {user.name}
            {user.phone}
            {user.email}
            <button onClick={() => onDelete(user.id)}>Delete</button>
            <button onClick={() =>{setTimeout(() => {history.push('/users/' + user.id)}, 1000)
            }}>Edit</button>

        </li>
    )
}

const style = {
    border: 'solid 2px #000',
    borderRadius: '5px',
    height: '50px',
    marginBottom: '5px'
}
