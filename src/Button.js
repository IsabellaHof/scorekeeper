import React, { Component } from 'react'
import './App.css'

export default class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button className="Button-Style" onClick={this.props.onClick}>
          {this.props.children}
        </button>
      </div>
    )
  }
}
