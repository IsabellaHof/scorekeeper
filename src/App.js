import React, { Component } from 'react'
import './App.css'
import Score from './Score'
import ScoreUpdater from './ScoreUpdater'
import Button from './Button'
import ScoreBoard from './ScoreBoard'

class App extends Component {
  state = {
    users: [
      {
        name: 'Isabella',
        score: '0',
      },
      {
        name: 'Sven',
        score: '0',
      },
      {
        name: 'Hans',
        score: '0',
      },
    ],
  }

  updateScore = (index, value) => {
    const { users } = this.state
    const user = users[index]
    this.setState({
      users: [
        ...users.slice(0, index),
        { ...user, score: user.score + value },
        ...users.slice(index + 1),
      ],
    })
  }

  resetScore = () => {
    this.setState({
      users: this.state.users.map(user => ({ ...user, score: 0 })),
    })
  }

  render() {
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
          <Button onClick={this.resetScore}>Reset</Button>
        </div>
      </React.Fragment>
    )
  }
}

//resetStore() {this.setState({score:0,})}
// onClick={()=> this.resetScore.bind(this)}
export default App
