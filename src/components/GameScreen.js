import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import Button from './Button'

export default class GameScreen extends Component {
  render() {
    const { players, onResetScore, onUpdateScore, onBack } = this.props
    return (
      <React.Fragment>
        <div className="App">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              title={player.name}
              score={player.score}
              onUpdate={score => onUpdateScore(index, score)}
            />
          ))}
          <Button onClick={onResetScore}>Reset Scores</Button>
          <Button onClick={onBack}>Back</Button>
        </div>
      </React.Fragment>
    )
  }
}
