var React = require('react'),
    ReactDOM = require('react-dom'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex');

// window.apiUtil = require('./util/apiUtil.js');
// window.PokemonStore = require('./stores/pokemon.js');

window.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render(<PokemonsIndex />, root);
});
