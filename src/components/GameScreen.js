import React, { Component } from 'react'
import EditCard from './EditCard'
import Button from './Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class GameScreen extends Component {
  render() {
    const { players, onResetScores, onUpdateScore, onSaveRound } = this.props
    return (
      <React.Fragment>
        <div className="App">
          {players.map((player, index) => (
            <EditCard
              key={index}
              title={player.name}
              score={player.roundScore}
              onUpdate={score => onUpdateScore(index, score)}
            />
          ))}
          <Link to="/summary" style={{ textDecoration: 'none' }}>
            <Button onClick={onSaveRound}>Save Round</Button>
          </Link>
          <Button onClick={onResetScores}>Reset Scores</Button>
        </div>
      </React.Fragment>
    )
  }
}
