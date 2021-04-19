import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function User({ user, onDelete }) {
    
    const history = useHistory();
    return (
        <TableRow>
            <TableCell component="th" scope="row">{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell align="right">
                <IconButton onClick={() => history.push('/users/' + user.id)}>Edit</IconButton>
                <IconButton onClick={() => onDelete(user.id)}>Delete</IconButton>
            </TableCell>
        </TableRow>
    )
}

