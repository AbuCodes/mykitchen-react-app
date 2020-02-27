import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  let recipes = {};

  const setRecipes = data => {
    recipes = data;
  };

  const getRecipes = () => {
    return recipes;
  };

  return (
    <Router>
      <main>
        {/* nav bar */}
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route
            path='/recipes'
            exact
            component={() => <Recipes setRecipes={setRecipes} />}
          />
          <Route
            path='/recipes/:id'
            component={props => (
              <SingleRecipe {...props} getRecipes={getRecipes} />
            )}
          />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
