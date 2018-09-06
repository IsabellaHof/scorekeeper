import React, { Component } from 'react'
import styled from 'styled-components'

const StyledScore = styled.button`
  width: 50px;
  height: 50px;
  color: blueviolet;
  font-size: 20px;
  border: solid 1px blueviolet;
  margin: 5px;

  &:hover {
    background-color: blueviolet;
    color: white;
  }
`

export default class RoundsBar extends Component {
  state = {
    round: [11, 20, 56],
  }
  render() {
    const { round } = this.state
    return (
      <div>
        <StyledScore>
          {round.map(round => (
            <div>{round}</div>
          ))}
        </StyledScore>
      </div>
    )
  }
}
