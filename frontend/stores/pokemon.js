var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    PokemonStore = new Store(AppDispatcher),
    PokemonConstants = require('../constants/PokemonConstants');

var _pokemons = [];

PokemonStore.all = function(){
  return _pokemons.slice();
};

PokemonStore.__onDispatch = function(payload){
  switch (payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      this._resetPokemons(payload.pokemons);
      break;
  }
};

PokemonStore._resetPokemons = function(pokemons){
  _pokemons = pokemons.slice();
  this.__emitChange();
};

module.exports = PokemonStore;
