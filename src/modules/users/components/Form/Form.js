import React, { useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useUsers } from '../../hooks/useUsers';
import { useUser } from '../../hooks/useUser';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

export default function Form() {
    const match = useRouteMatch();
    const { user } = useUser(match.params.id);
    const history = useHistory();
    const {addUser, editUser} =  useUsers();
    const [selectedUser, setSelectedUser] = useState(user);

    const classes = useStyles();
    
    const Add = () => {
        return Object.keys(user).length === 1 ? true : false
    }
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        Add() ? editUser({...selectedUser}) : addUser(selectedUser);
        setTimeout(() => {history.push('/users')}, 1000);
    };

    const onInputChange = (e) => { 
        setSelectedUser(Add() ? { ...user[0], [e.target.name]: e.target.value } : { ...selectedUser, [e.target.name]: e.target.value })
    };

    return (
        <Container maxWidth="sm">
            <form className={classes.root} noValidate autoComplete="off">
                <input
                    required
                    type="text"
                    name="name"
                    defaultValue={Add() ? user[0].name : ''}
                    onChange={onInputChange}
                    placeholder="name"
                    /><br/>
                <input
                    required
                    type="tel"
                    name="phone"
                    defaultValue={Add() ? user[0].phone : ''}
                    onChange={onInputChange}
                    placeholder="phone"
                /><br/>
                <input
                    required
                    type="email"
                    name="email"
                    defaultValue={Add() ? user[0].email : ''}
                    onChange={onInputChange}
                    placeholder="email"
                /><br/>
                <Button variant="contained" color="primary" onClick={onFormSubmit}>Save user</Button><br/>
                <Button variant="contained" color="secondary" onClick={() => history.push('/users')}>Cancel</Button>
            </form>
        </Container>
    )
}
