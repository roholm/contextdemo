import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className="nav_link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/nyheder" className="nav_link">Nyheder</NavLink>
                </li>
                <li>
                    <NavLink to="/opretnyhed" className="nav_link">Opret Nyhed</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
