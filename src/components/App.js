import React, { Component } from 'react'
import Button from './Button'
import PlayerCard from './PlayerCard'
import PlayerSetup from './PlayerInput'
import styled from 'styled-components'
import { load, save } from '../Services'

const StyledApp = styled.div`
  border: 1px solid blueviolet;
  background: white;
  text-align: center;
  height: 99vh;
`

class App extends Component {
  state = {
    showStartScreen: true,
    players: load('players') || [],
  }

  updateScore = (index, value) => {
    const { players } = this.state
    const player = players[index]
    this.setState(
      {
        players: [
          ...players.slice(0, index),
          { ...player, score: player.score + value },
          ...players.slice(index + 1),
        ],
      },
      this.saveplayers
    )
  }

  savePlayers() {
    save('players', this.state.players)
  }

  resetScore = () => {
    this.setState(
      {
        players: this.state.players.map(player => ({ ...player, score: 0 })),
      },
      this.savePlayers
    )
  }

  backToStart = () => {
    this.setState({
      showStartScreen: true,
    })
  }
  startGame = () => {
    if (this.state.players.length) {
      this.setState(
        {
          showStartScreen: false,
        },
        this.savePlayers
      )
    }
  }
  addPlayer = name => {
    const players = this.state.players
    this.setState(
      {
        players: [...players, { name: name, score: 0 }],
      },
      this.savePlayers
    )
  }

  renderWarningOrPlayButton() {
    return this.state.players.length ? (
      <Button onClick={this.startGame}>Play!</Button>
    ) : (
      <div>add one Player!</div>
    )
  }

  deletePlayer = index => {
    const { players } = this.state
    this.setState(
      {
        players: [...players.slice(0, index), ...players.slice(index + 1)],
      },
      this.savePlayers
    )
  }

  deleteAllPlayer = index => {
    const { players } = this.state
    this.setState(
      {
        players: [],
      },
      this.savePlayers
    )
  }

  renderStartScreen() {
    const { players } = this.state
    return (
      <div>
        <h1>StartScreen</h1>
        {this.state.players.map((player, index) => (
          <div key={index}>
            {player.name}
            <button onClick={() => this.deletePlayer(index)}>&times;</button>
          </div>
        ))}

        <PlayerSetup onSubmit={this.addPlayer} />
        <Button small onClick={this.deleteAllPlayer}>
          Clear All Players
        </Button>
        {this.renderWarningOrPlayButton()}
      </div>
    )
  }

  renderActiveGame() {
    return (
      <React.Fragment>
        <div className="App">
          {this.state.players.map((player, index) => (
            <PlayerCard
              key={index}
              title={player.name}
              score={player.score}
              onUpdate={score => this.updateScore(index, score)}
            />
          ))}
          <Button onClick={this.resetScore}>Reset Scores</Button>
          <Button onClick={this.backToStart}>Back</Button>
        </div>
      </React.Fragment>
    )
  }
  render() {
    const { showStartScreen } = this.state
    return (
      <StyledApp>
        {showStartScreen ? this.renderStartScreen() : this.renderActiveGame()}
      </StyledApp>
    )
  }
}

//resetStore() {this.setState({score:0,})}
// onClick={()=> this.resetScore.bind(this)}
export default App
