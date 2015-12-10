var React = require('react');

var PokemonIndexItem = React.createClass({

  render: function(){
    return(
      <li className="poke-list-item" key={this.props.idx}>
        {this.props.name}: {this.props.poke_type}
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
