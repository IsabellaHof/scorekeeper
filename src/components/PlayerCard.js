import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerButtonBar from './PointButtonBar'

const StyledBoard = styled.section`
  margin: 50px;
`

export default class PlayerCard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <StyledBoard>
        <span>{title}</span>
        <span>{score}</span>
        <PlayerButtonBar handleClick={onUpdate} />
      </StyledBoard>
    )
  }
}
