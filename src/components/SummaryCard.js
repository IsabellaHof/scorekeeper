import React, { Component } from 'react'
import styled from 'styled-components'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`

export default class SummaryCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    scores: PropTypes.arrayOf(PropTypes.number),
  }

  render() {
    const { title, scores } = this.props
    const total =
      scores.reduce((prev, curr) => Number(prev) + Number(curr), 0) || 0
    return (
      <Wrapper>
        <PlayerHeader title={title} score={total} />
        <RoundsBar scores={scores} />
      </Wrapper>
    )
  }
}
