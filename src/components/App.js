import React, { Component } from 'react'
import Button from './Button'
import ScoreBoard from './ScoreBoard'
import PlayerSetup from './PlayerSetup'
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
    users: load('users') || [],
  }

  updateScore = (index, value) => {
    const { users } = this.state
    const user = users[index]
    this.setState(
      {
        users: [
          ...users.slice(0, index),
          { ...user, score: user.score + value },
          ...users.slice(index + 1),
        ],
      },
      this.saveUsers
    )
  }

  saveUsers() {
    save('users', this.state.users)
  }

  resetScore = () => {
    this.setState(
      {
        users: this.state.users.map(user => ({ ...user, score: 0 })),
      },
      this.saveUsers
    )
  }

  backToStart = () => {
    this.setState({
      showStartScreen: true,
    })
  }
  startGame = () => {
    if (this.state.users.length) {
      this.setState(
        {
          showStartScreen: false,
        },
        this.saveUsers
      )
    }
  }
  addPlayer = name => {
    const users = this.state.users
    this.setState(
      {
        users: [...users, { name: name, score: 0 }],
      },
      this.saveUsers
    )
  }

  renderWarningOrPlayButton() {
    return this.state.users.length ? (
      <Button onClick={this.startGame}>Play!</Button>
    ) : (
      <div>add one User!</div>
    )
  }

  deleteUser = index => {
    const { users } = this.state
    this.setState(
      {
        users: [...users.slice(0, index), ...users.slice(index + 1)],
      },
      this.saveUsers
    )
  }

  deleteAllUser = index => {
    const { users } = this.state
    this.setState(
      {
        users: [],
      },
      this.saveUsers
    )
  }

  renderStartScreen() {
    const { users } = this.state
    return (
      <div>
        <h1>StartScreen</h1>
        {this.state.users.map((user, index) => (
          <div key={index}>
            {user.name}
            <button onClick={() => this.deleteUser(index)}>&times;</button>
          </div>
        ))}

        <PlayerSetup onSubmit={this.addPlayer} />
        <Button small onClick={this.deleteAllUser}>
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
          {this.state.users.map((user, index) => (
            <ScoreBoard
              key={index}
              title={user.name}
              score={user.score}
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
