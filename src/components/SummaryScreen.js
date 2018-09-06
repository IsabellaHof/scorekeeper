import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class SummaryScreen extends Component {
  render() {
    const { players, onBackToStart, onAddRound } = this.props
    return (
      <div>
        {players.map((player, index) => (
          <SummaryCard key={index} title={player.name} scores={player.scores} />
        ))}
        <Link to="/game" style={{ textDecoration: 'none' }}>
          <Button onClick={onAddRound}>add round</Button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button onClick={onBackToStart}> Back To Start</Button>
        </Link>
      </div>
    )
  }
}
