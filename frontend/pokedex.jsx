var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app.jsx');

// window.apiUtil = require('./util/apiUtil.js');
// window.PokemonStore = require('./stores/pokemon.js');

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render((
    <Router>
      <Route path="/" component={App} />
    </Router>)
  , root);
});
