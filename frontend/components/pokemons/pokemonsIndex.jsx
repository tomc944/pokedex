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
    var that = this;

    var pokeKeys = Object.keys(this.state.pokemons);
    var pokeList = pokeKeys.map(function(pokeId){
      var pokemon = that.state.pokemons[pokeId];
      return(
        <PokemonIndexItem
        key={pokeId}
        id={pokeId}
        name={pokemon.name}
        poke_type={pokemon.poke_type} />
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
