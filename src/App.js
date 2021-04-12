import React from 'react';
import Users from './modules/users/components/Users/Users';
import Albums from './modules/albums/components/Albums/Albums';
import Header from './modules/header/components/Header/Header';
import Dashboard from './modules/dashboard/components/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Form from './modules/users/components/Form/Form';


export default function App() {
   
    return (
        <Router>
            <Header/>
            <Switch>
                <div className="main">
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/albums" exact component={Albums}/>
                    <Route path="/add" exact component={Form}/>
                    <Route path={'/users' + '/:id'} exact component={Form}/>
                </div>
            </Switch>
        </Router>
        
    )
}
