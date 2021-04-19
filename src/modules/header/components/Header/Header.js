import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

export default function Header() {
    const history = useHistory();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button variant="contained" color="secondary" onClick={() => history.push('/')}>Dashboard</Button>
                    <Button variant="contained" color="secondary" onClick={() => history.push('/users')}>Users</Button>
                    <Button variant="contained" color="secondary" onClick={() => history.push('/albums')}>Albums</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
