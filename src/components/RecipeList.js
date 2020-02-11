import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    console.log(recipes);
    return (
      <>
        <div className="container py-5">
          {/*title*/}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-recipe">Recipe List</h1>
            </div>
          </div>
          {/*end of title*/}
          <div className="row">
            {recipes.map((recipe, i) => (
              <Recipe key={i} recipe={recipe} id={i} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
