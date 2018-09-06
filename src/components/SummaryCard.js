import React, { Component } from 'react'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
// import ropTypes

export default class SummaryCard extends Component {
  // static propTypes = {
  //   title: propTypes.string,

  // }

  render() {
    const { title, scores } = this.props
    const total = scores.reduce((prev, curr) => prev + curr, 0) || 0
    return (
      <div>
        <PlayerHeader title={title} score={total} />
        <RoundsBar scores={scores} />
      </div>
    )
  }
}
