import React, { Component } from 'react';

class GameElementView extends Component{
    render() {
        let game = this.props.location.state.game;
        return (
            <div>
                <h2>{game.name}</h2>
                <h4>{game.description}</h4>
            </div>
        )
    }
}

export default GameElementView;