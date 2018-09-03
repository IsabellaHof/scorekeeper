import React, { Component } from 'react'
import './App.css'

export default class ScoreUpdater extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div>
        <button onClick={() => onClick(-10)} class="ScoreUpdater-Style">
          <strong>-10</strong>
        </button>
        <button onClick={() => onClick(-5)} class="ScoreUpdater-Style">
          <strong> -5</strong>
        </button>
        <button onClick={() => onClick(-1)} class="ScoreUpdater-Style">
          <strong>-1</strong>
        </button>
        <button onClick={() => onClick(1)} class="ScoreUpdater-Style">
          <strong>1</strong>
        </button>
        <button onClick={() => onClick(5)} class="ScoreUpdater-Style">
          <strong>5</strong>
        </button>
        <button onClick={() => onClick(10)} class="ScoreUpdater-Style">
          <strong>10</strong>
        </button>
      </div>
    )
  }
}
