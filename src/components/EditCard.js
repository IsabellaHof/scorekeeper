import React, { Component } from 'react'
import styled from 'styled-components'
import PointButtonBar from './PointButtonBar'

const StyledBoard = styled.section`
  margin: 50px;
`

export default class EditCard extends Component {
  render() {
    const { title, score, onUpdate } = this.props
    return (
      <StyledBoard>
        <span>{title}</span>
        <span>{score}</span>
        <PointButtonBar handleClick={onUpdate} />
      </StyledBoard>
    )
  }
}
