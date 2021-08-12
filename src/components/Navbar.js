import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export default function NavbarMenu() {
    return (
        <Navbar expand="lg">
            <ul>
                <li>
                    <NavLink  exact to="/profile/example">User Profile</NavLink>
                </li>
                <li>
                    <NavLink exact to="/eee">404</NavLink>
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink exact to="/eee">404</NavLink>
                </li>
            </ul>

        </Navbar>
    )
}
