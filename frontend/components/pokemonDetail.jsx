var React = require('react'),
    PokemonStore = require('../stores/pokemon');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return( {pokemon: this.getStateFromStore()} );
  },
  getStateFromStore: function(){
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },
  componentDidMount: function(){
    this.token = PokemonStore.addListener(this._onChange);
  },
  _onChange: function() {
    this.setState({ pokemon: this.getStateFromStore()});
  },
  componentWillUnmount: function(){
    this.token.remove();
  },
  render: function(){
    if (this.state.pokemon.id === 'undefined'){
      return (<div className="None"></div>);
    } else {
      return (<div>
        <div className="pokemon-detail-pane">
          <div className="detail">
            <img src={ this.state.pokemon.image_url}></img>
            { this.state.pokemon.name }
            { this.state.pokemon.poke_type }
            { this.state.pokemon.attack }
            { this.state.pokemon.defense }
            { this.state.pokemon.moves }
          </div>
        </div>
      </div>);
    }
  }
});

module.exports = PokemonDetail;
