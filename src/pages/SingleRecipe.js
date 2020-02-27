import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: {},
      id,
      loading: true
    };
  }

  async componentDidMount() {
    let recipesList = await this.props.getRecipes();
    //get recipe with the same index as the one in the list
    recipesList = recipesList[this.state.id].recipe;
    try {
      this.setState({
        recipe: recipesList,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { image, source, url, label, ingredientLines } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto col-md-6 my-3'>
              <h2 className='text-uppercase text-orange text-center'>
                loading recipe
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={image}
              className='d-block w-100'
              style={{ maxHeight: '30rem' }}
              alt='Recipe Image'
            />
          </div>

          <div className='col-10 mx-auto col-md-6 my-3'>
            <h6 className='text-uppercase'>{label}</h6>
            <h6 className='text-warning text-capitalize'>
              Provided by {source}
            </h6>
            <Link
              to='/recipes'
              style={{ color: '#fff' }}
              className='btn btn-warning mt-2 mx-2 text-capitalize'
            >
              Return
            </Link>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary mt-2 text-capitalize'
            >
              Publisher
            </a>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mt-2 mx-2 text-capitalize'
            >
              Recipe Url
            </a>
            <ul className='list-group mt-4'>
              <h2
                className='mt-3 mb-4'
                style={{
                  fontSize: '1.5rem'
                }}
              >
                Ingredients
              </h2>
              {ingredientLines.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='list-group-item'
                    style={{
                      border: 'none',
                      padding: '.75rem 0 .75rem 0'
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
