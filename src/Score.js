import React, { Component } from 'react'
import './App.css'

export default class Score extends Component {
  render() {
    return <div className="Score-Style">{this.props.value}</div>
  }
}
