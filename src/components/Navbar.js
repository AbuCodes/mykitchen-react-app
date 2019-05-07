import React, { Component } from "react";
import logo from "../images/logo.PNG";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" width="200px" />
                </Link>
                <div className="collapse navbar-collapse show ml-sm-5">
                    <ul className="navbar-nav">
                        <il className="navbar-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </il>
                        <il className="navbar-item">
                            <Link className="nav-link" to="/recipes">
                                Recipes
                            </Link>
                        </il>
                    </ul>
                </div>
            </nav>
        );
    }
}
