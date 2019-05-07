import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Default extends Component {
    render() {
        return (
            <Header title="404 Page not found" styleClass="default-hero">
                <Link
                    to="/"
                    className="text-uppercase btn btn-secondary btn-lg mt-3"
                >
                    Return Home
                </Link>
            </Header>
        );
    }
}
