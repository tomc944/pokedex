var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/AppDispatcher'),
    PokemonStore = new Store(AppDispatcher),
    PokemonConstants = require('../constants/PokemonConstants');

var _pokemons = {};

PokemonStore.all = function(){
  return $.extend({}, _pokemons);
};

PokemonStore.find = function(id){
  return _pokemons[id];
};

PokemonStore.__onDispatch = function(payload){
  switch (payload.actionType){
    case PokemonConstants.POKEMONS_RECEIVED:
      this._resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      this._updatePokemon(payload.pokemon);
      break;
  }
};
PokemonStore._updatePokemon = function(pokemon){
  _pokemons[pokemon.id] = pokemon;
  this.__emitChange();
};

PokemonStore._resetPokemons = function(pokemons){
  _pokemons = {};
  pokemons.forEach(function (pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  this.__emitChange();
};

module.exports = PokemonStore;
