import React, { Component } from 'react'
import styled from 'styled-components'

const StyledScore = styled.section`
  margin: 15px;
  font-size: 120px;
  color: blueviolet;
`

export default class Score extends Component {
  render() {
    return <div className="Score-Style">{this.props.value}</div>
  }
}
