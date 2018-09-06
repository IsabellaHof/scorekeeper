import React, { Component } from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.section`
  margin: 50px;
  padding: 4px;
  justify-content: space-between;
  display: flex;
  background: blueviolet;
  color: white;
`

export default class PlayerHeader extends Component {
  render() {
    const { title, score } = this.props
    return (
      <div>
        <FlexWrapper>
          <span>{title}</span>
          <span>{score}</span>
        </FlexWrapper>
      </div>
    )
  }
}
