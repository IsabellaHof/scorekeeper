import React, { Component } from 'react'
import styled from 'styled-components'
import ScoreUpdater from './ScoreUpdater'

const StyledBoard = styled.section`
  margin: 50px;
`
// const BoardHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
// `

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <StyledBoard>
        <span>{title}</span>
        <span>{score}</span>
        <ScoreUpdater handleClick={onUpdate} />
      </StyledBoard>
    )
  }
}
