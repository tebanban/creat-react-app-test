import React from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Error404 from '../pages/Error404';
import HomePage from '../pages/HomePage';
import NavbarMenu  from '../components/Navbar';
import ProfilePage from '../pages/ProfilePage';
import CategoriesPage from '../components/CategoriesPage';

export default function AppRouter() {
    return (
        
        <Router>
            <NavbarMenu  />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/profile/:username" component={ProfilePage}/>
                <Route exact path="/categories" component={CategoriesPage}/>

                <Route path="*"  component={Error404} />
                      
            </Switch>
        </Router>
    )
}
