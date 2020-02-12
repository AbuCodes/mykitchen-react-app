import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import { recipeData } from '../data/tempList';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  state = {
    recipes: recipeData,
    search: '',
    url: `https://api.edamam.com/search`,
    base_url: `https://api.edamam.com/search`,
    query: '?q=',
    error: '',
    api: process.env.REACT_APP_EDAMAM_API
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      console.log(jsonData);
      if (jsonData.hits.count === 0) {
        this.setState({
          error: 'Sorry your search did not return any results'
        });
      } else {
        this.setState({
          recipes: jsonData.hits,
          error: ''
        });
      }

      this.setState({
        recipes: jsonData.hits
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    //this.getRecipes();
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search, api } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}${api}`,
        search: ''
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <section>
            <div className='row'>
              <div className='col'>
                <h2 className='text-orange text-center text-uppercase mt-5'>
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </>
    );
  }
}
