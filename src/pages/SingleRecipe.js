import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            //recipe: recipeData,
            recipe: {},
            id,
            loading: true
        };
    }

    async componentDidMount() {
        const url = `https://www.food2fork.com/api/get?key=ade2042f9abb8f684c5a3117155d8078&rId=${
            this.state.id
        }`;
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            this.setState({
                recipe: responseData.recipe,
                loading: false
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {
            image_url,
            publisher,
            publisher_url,
            source_url,
            title,
            ingredients
        } = this.state.recipe;
        if (this.state.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h2 className="text-uppercase text-orange text-center">
                                loading recipe
                            </h2>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img
                            src={image_url}
                            className="d-block w-100"
                            style={{ maxHeight: "30rem" }}
                            alt="Recipe Image"
                        />
                    </div>

                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h6 className="text-uppercase">{title}</h6>
                        <h6 className="text-warning text-capitalize">
                            Provided by {publisher}
                        </h6>
                        <Link
                            to="/recipes"
                            style={{ color: "#fff" }}
                            className="btn btn-warning mt-2 mx-2 text-capitalize"
                        >
                            Return
                        </Link>
                        <a
                            href={publisher_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-2 text-capitalize"
                        >
                            Publisher
                        </a>
                        <a
                            href={source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success mt-2 mx-2 text-capitalize"
                        >
                            Recipe Url
                        </a>
                        <ul className="list-group mt-4">
                            <h2
                                className="mt-3 mb-4"
                                style={{
                                    fontSize: "1.5rem"
                                }}
                            >
                                Ingredients
                            </h2>
                            {ingredients.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="list-group-item"
                                        style={{
                                            border: "none",
                                            padding: ".75rem 0 .75rem 0"
                                        }}
                                    >
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}