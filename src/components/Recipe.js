import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends Component {
  render() {
    //console.log(this.props.recipe.recipe);
    const { image, label, url, source } = this.props.recipe.recipe;
    const id = this.props.id;
    const defaultImage =
      'https://www.edamam.com/web-img/c70/c701b2e2f0c127d562df57b705058a3a.jpg';
    return (
      <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
        <div className='card' style={{ height: '100%' }}>
          <img
            src={image ? image : defaultImage}
            style={{ height: '14rem' }}
            className='img-card-top'
            alt='recipe'
          />
          <div className='card-body text-capitalize'>
            <h6>{label}</h6>
            <h6 className='text-warning text-recipe'>Provided by {source}</h6>
          </div>
          <div className='card-footer'>
            <Link
              to={`/recipes/${id}`} //This needs to be that guid
              className='btn btn-primary text-capitalize mobile-btn'
            >
              Ingredients
            </Link>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-success mx-2 text-capetalize mobile-btn'
            >
              View Recipe
            </a>
          </div>
        </div>
      </div>
    );
  }
}
