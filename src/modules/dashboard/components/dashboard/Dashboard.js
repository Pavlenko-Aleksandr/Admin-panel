import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

export default function Dashboard() {
    const history = useHistory();
    return (
        <Container maxWidth="xl">
            <Typography align="center" variant="h4">Dashboard</Typography>
            <ButtonGroup disableElevation variant="contained" color="primary">
                <Button variant="contained" color="primary" onClick={() => history.push('/users')}>Users</Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/albums')}>Albums</Button>
            </ButtonGroup>
        </Container>
        
    )
}
