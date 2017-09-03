import React, { Component } from 'react';
import games from '../../games.json';
import GameElement from './GameElement.js';

class GamesView extends Component {
  render() {
    let gamesL = games.games;
    let gameList = gamesL.map((gameV) =>
      <GameElement key={gameV.name.toString()} game={gameV} />
    );

    return (
      <div className="Games View">
        <p>View the games</p>
        <ul>
          {gameList}
        </ul>
      </div>
    );
  }
}

export default GamesView;
