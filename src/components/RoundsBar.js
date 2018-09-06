import React, { Component } from 'react'
import styled from 'styled-components'

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  height: 100px;
  width: 250px
  background: #eee;
`

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
  scrollerRef = React.createRef()

  componentDidMount() {
    const scroller = this.scrollerRef.current
    scroller.scrollLeft = scroller.scrollWidth
  }

  render() {
    let { scores } = this.props
    scores = scores.length ? scores : [0]
    return (
      <Scroller innerRef={this.scrollerRef}>
        {scores.map((score, i) => (
          <StyledScore key={i}>{score}</StyledScore>
        ))}
      </Scroller>
    )
  }
}

// Scroller innerRef={this.scrollerRef} oder <div ref={this.scrollerRef}>
