import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GameElement extends Component {
  render() {
    return (
      <li>
        <Link to={{
          pathname:"/games/"+this.props.game.name,
          state:{ game:this.props.game }}}>
          <p>{this.props.game.name}</p>
          <p>{this.props.game.description}</p>
        </Link>
      </li>
    );
  }
}

export default GameElement;