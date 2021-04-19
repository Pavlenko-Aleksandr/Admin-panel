import React from 'react';
import { useUsers } from '../../hooks/useUsers';
import User from '../User/User';
import { useHistory } from 'react-router-dom';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

export default function Contacts() {
    const { users, deleteUser } =  useUsers();
    const history = useHistory();
    
    return (
        <Container maxWidth="xl">
            <Typography align="center" variant="h4">Users</Typography>
            <Button variant="contained" color="primary" onClick={() => history.push('/add')}>ADD</Button>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <User key={user.id} user={user} onDelete={deleteUser} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
