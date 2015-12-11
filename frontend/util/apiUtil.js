var ApiActions = require("../actions/pokemonActions.js");

var apiUtil = {
  fetchAllPokemons: function(){
    $.ajax({
       method: 'GET',
       url: 'api/pokemon',
       dataType: 'json',
       success: function(resp) {
         ApiActions.receiveAllPokemons(resp);
       }
    });
  },
  fetchPokemon: function(id){
    $.ajax({
       method: 'GET',
       url: 'api/pokemon/' + id,
       dataType: 'json',
       success: function(resp) {
         ApiActions.receivePokemon(resp);
       }
    });
  }
};

module.exports = apiUtil;
