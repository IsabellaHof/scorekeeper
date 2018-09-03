import React, { Component } from 'react'
import './App.css'
import Score from './Score'
import ScoreUpdater from './ScoreUpdater'
import Button from './Button'

class App extends Component {
  state = {
    score: 0,
  }

  updateScore = value => {
    this.setState({ score: this.state.score + value })
  }

  resetScore = () => {
    this.setState({
      score: 0,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Score value={this.state.score} />
          <ScoreUpdater onClick={this.updateScore} />
          <Button onClick={this.resetScore}>Reset</Button>
        </div>
      </React.Fragment>
    )
  }
}
//resetStore() {this.setState({score:0,})}
// onClick={()=> this.resetScore.bind(this)}
export default App
