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

export default class PointButtonBar extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div>
        <StyledScore onClick={() => onClick(-10)}>
          <strong>-10</strong>
        </StyledScore>
        <StyledScore onClick={() => onClick(-5)}>
          <strong> -5</strong>
        </StyledScore>
        <StyledScore onClick={() => onClick(-1)}>
          <strong>-1</strong>
        </StyledScore>
        <StyledScore onClick={() => onClick(1)}>
          <strong>1</strong>
        </StyledScore>
        <StyledScore onClick={() => onClick(5)}>
          <strong>5</strong>
        </StyledScore>
        <StyledScore onClick={() => onClick(10)}>
          <strong>10</strong>
        </StyledScore>
      </div>
    )
  }
}
