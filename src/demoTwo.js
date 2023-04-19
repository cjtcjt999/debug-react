import React, { Component, createRef } from 'react'
import './index.css'
export default class DemoTwo extends Component {

  state = {
    count: 0,
    count2: 0
  }
  onClick = e => {
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count2: this.state.count2 + 2,
    })
  }

  render () {
    const { count, count2 } = this.state
    return (
      <div>
        <button onClick={this.onClick}>点击</button>
        {count}
        {count2}
      </div>
    )
  }
}