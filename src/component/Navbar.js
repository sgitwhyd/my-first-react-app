import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navbar.css"

const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">My React</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
               <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/Features">Features</Link>
            </li>
            <li class="nav-item">
                <Link   className="nav-link " to="/About">About</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default Navbar;