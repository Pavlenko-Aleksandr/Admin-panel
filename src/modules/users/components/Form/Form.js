import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { Link } from 'react-router-dom';

export default function Form() {
  
    const history = useHistory();
    const {addUser} =  useUsers();
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: ''
    });
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        addUser(user);
        setUser({name: '', phone: '', email: ''});
        setTimeout(() => {history.push('/users')}, 1000);
        
    };

     const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input required
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={onInputChange}
                    placeholder="name"/><br/>
                <input
                    required
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={onInputChange}
                    placeholder="phone"
                /><br/>
                <input
                    required
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={onInputChange}
                    placeholder="email"
                />
                <button>Save user</button>
                <Link to="/users">Cancel</Link>
            </form>
        </div>
    )
}
