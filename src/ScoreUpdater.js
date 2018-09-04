import React, { Component } from 'react'
import './App.css'

export default class ScoreUpdater extends Component {
  render() {
    const { handleClick } = this.props
    return (
      <div>
        <button onClick={() => handleClick(-10)} class="ScoreUpdater-Style">
          <strong>-10</strong>
        </button>
        <button onClick={() => handleClick(-5)} class="ScoreUpdater-Style">
          <strong> -5</strong>
        </button>
        <button onClick={() => handleClick(-1)} class="ScoreUpdater-Style">
          <strong>-1</strong>
        </button>
        <button onClick={() => handleClick(1)} class="ScoreUpdater-Style">
          <strong>1</strong>
        </button>
        <button onClick={() => handleClick(5)} class="ScoreUpdater-Style">
          <strong>5</strong>
        </button>
        <button onClick={() => handleClick(10)} class="ScoreUpdater-Style">
          <strong>10</strong>
        </button>
      </div>
    )
  }
}
