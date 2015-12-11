var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    PokemonDetail = require('./components/pokemonDetail.jsx'),
    App = require('./components/app.jsx');

// window.apiUtil = require('./util/apiUtil.js');
// window.PokemonStore = require('./stores/pokemon.js');

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <Route path="api/pokemon/:pokemonId" component={PokemonDetail} />
      </Route>
    </Router>)
  , root);
});
