var React = require('react'),
    PokemonStore = require('../stores/pokemon');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return( {pokemon: this.getStateFromStore() } );
  },
  getStateFromStore: function(){
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },
  componentDidMount: function(){
    this.token = PokemonStore.addListener(this._onChange);
  },
  _onChange: function() {
    this.setState({pokemon: this.getStateFromStore()});
  },
  componentWillUnmount: function(){
    this.token.remove();
  },
  render: function(){
    if (this.state.pokemon.id === 'undefined'){
      return (<div className="None"></div>);
    } else {
      return (
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={ this.state.pokemon.image_url}></img>
              { this.state.pokemon.name }
              <br></br>
              { this.state.pokemon.poke_type }
              <br></br>
              { this.state.pokemon.attack }
              <br></br>
              { this.state.pokemon.defense }
              <br></br>
              { this.state.pokemon.moves }
            </div>
          </div>
      );
    }
  }
});

module.exports = PokemonDetail;
