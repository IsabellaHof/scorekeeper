import React, { Component } from 'react'

export default class PlayerSetup extends Component {
  state = {
    inputValue: '',
  }

  updateInputValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  ckeckForEnterButton = event => {
    if (event.key === 'Enter' && this.state.inputValue != '') {
      this.props.onSubmit(this.state.inputValue)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.updateInputValue}
          onKeyUp={this.ckeckForEnterButton}
          placeholder="Playername"
          autoFocus
          value={this.state.inputValue.toUpperCase()}
          type="text"
        />
      </div>
    )
  }
}
