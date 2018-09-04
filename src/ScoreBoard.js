import React, { Component } from 'react'
import ScoreUpdater from './ScoreUpdater'

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <div className="ScoreBoard">
        <span>{title}</span>
        <span>{score}</span>
        <ScoreUpdater handleClick={onUpdate} />
      </div>
    )
  }
}
