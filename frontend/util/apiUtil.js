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
  }
};

module.exports = apiUtil;
