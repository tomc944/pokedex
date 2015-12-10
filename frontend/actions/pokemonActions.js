var AppDispatcher = require('../dispatcher/AppDispatcher'),
    PokemonConstants = require('../constants/PokemonConstants');

var pokemonActions = {
  receiveAllPokemons: function(pokemons) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};


module.exports = pokemonActions;
