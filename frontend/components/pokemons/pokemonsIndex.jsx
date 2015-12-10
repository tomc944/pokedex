var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    apiUtil = require('../../util/apiUtil'),
    PokemonIndexItem = require('./pokemonIndexItem.jsx');

var PokemonsIndex = React.createClass({
  getInitialState: function(){
    return ({ pokemons: PokemonStore.all() });
  },
  _onChange: function(){
    this.setState({ pokemons: PokemonStore.all() });
  },
  componentDidMount: function(){
    this.token = PokemonStore.addListener(this._onChange);
    apiUtil.fetchAllPokemons();
  },
  componentWillUnmount: function(){
    this.token.remove();
  },
  render: function(){
    // App Academy instructions are vague
    var pokeList = this.state.pokemons.map(function(pokemon, idx){
      return(
        <PokemonIndexItem
        key={idx}
        name={pokemon.name}
        type={pokemon.type} />
      );
    });

    return(
      <div>
        <ul>
          {pokeList}
        </ul>
      </div>
    );
  }
});

module.exports = PokemonsIndex;
