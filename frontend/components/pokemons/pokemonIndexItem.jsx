var React = require('react'),
    apiUtil = require('../../util/apiUtil'),
    History = require("react-router").History;

var PokemonIndexItem = React.createClass({
  mixins: [History],
  showDetail: function() {
    var pokemonUrl = "api/pokemon/" + this.props.id;
    this.history.push(pokemonUrl);
  },
  componentWillReceiveProps: function(newProps) {
    var pokemonId = parseInt(newProps.id);
  },
  render: function(){
    return(
      <li
        className="poke-list-item"
        key={this.props.key}
        onClick={this.showDetail}>
        {this.props.name}: {this.props.poke_type}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
