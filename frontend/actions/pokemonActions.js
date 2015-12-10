var AppDispatcher = require('../dispatcher/AppDispatcher');

var pokemonActions = {
  receiveAllPokemons: function() {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      
    });
  }
};


module.exports = pokemonActions;
