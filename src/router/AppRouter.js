import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Error404 from '../pages/Error404';
import HomePage from '../pages/HomePage';
import  NavbarMenu  from '../components/Navbar';

export default function AppRouter() {
    return (
        
        <Router>
            <NavbarMenu  />
            <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>
                <Route exact path="/about" >
                    <AboutPage />
                </Route>  
                <Route exact path="/contact">
                    <ContactPage />
                </Route> 
                <Route path="*">
                    <Error404 />
                </Route>   
            </Switch>
        </Router>
    )
}
