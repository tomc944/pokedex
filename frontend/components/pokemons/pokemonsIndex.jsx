var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    ApiActions = require('../../actions/pokemonActions');

var PokemonsIndex = React.createClass({
  getInitialState: function(){
    return ({ pokemons: PokemonStore.all() });
  },
  _onChange: function(){
    this.setState({ pokemons: PokemonStore.all() });
  },
  componentDidMount: function(){
    this.token = PokemonStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.token.remove();
  },
  render: function(){

  }
});

module.exports = PokemonsIndex;
