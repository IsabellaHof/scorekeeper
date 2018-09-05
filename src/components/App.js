import React, { Component } from 'react'
import Button from './Button'
import PlayerCard from './PlayerCard'
import styled from 'styled-components'
import { load, save } from '../Services'
import StartScreen from './StartScreen'

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

  deletePlayer = index => {
    const players = this.state.players
    this.setState(
      {
        players: [...players.slice(0, index), ...players.slice(index + 1)],
      },
      this.savePlayers
    )
  }

  deleteAllPlayers = () => {
    this.setState(
      {
        players: [],
      },
      this.savePlayers
    )
  }

  renderStartScreen() {
    return (
      <StartScreen
        players={this.state.players}
        onStartGame={this.startGame}
        onDeletePlayer={this.deletePlayer}
        onDeleteAllPlayers={this.DeleteAllPlayers}
        onAddPlayer={this.addPlayer}
      />
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
