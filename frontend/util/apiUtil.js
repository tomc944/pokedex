var ApiActions = require("../actions/ApiActions.js");

var apiUtil = {
  fetchAllPokemons: function(){
    $.ajax({
       method: 'GET',
       url: 'api/pokemon',
       dataType: 'json',
       success: function(resp) {
         ApiActions.receiveAllPokemons();
       }
    });
  }
};

module.exports = apiUtil;
