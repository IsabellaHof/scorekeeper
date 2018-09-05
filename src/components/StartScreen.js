import React, { Component } from 'react'
import Button from './Button'
import PlayerInput from './PlayerInput'

export default class StartScreen extends Component {
  render() {
    const {
      players,
      onDeletePlayer,
      onAddPlayer,
      onDeleteAllPlayers,
    } = this.props

    return (
      <div>
        <h1>StartScreen</h1>
        {players.map((player, index) => (
          <div key={index}>
            {player.name}
            <button onClick={() => onDeletePlayer(index)}>&times;</button>
          </div>
        ))}

        <PlayerInput onSubmit={onAddPlayer} />
        <Button small onClick={onDeleteAllPlayers}>
          Clear All Players
        </Button>
        {this.renderWarningOrPlayButton()}
      </div>
    )
  }

  renderWarningOrPlayButton() {
    const { players, onStartGame } = this.props
    return players.length ? (
      <Button onClick={onStartGame}>Play!</Button>
    ) : (
      <div>add one Player!</div>
    )
  }
}
