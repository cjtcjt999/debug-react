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
      count: this.state.count + 1,
    })
    this.setState({
      count2: this.state.count2 + 1,
    })
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   })
    //   this.setState({
    //     count: this.state.count + 2,
    //   })
    //   this.setState({
    //     count2: this.state.count2 + 1,
    //   })
    //   console.log('褚锦涛', this.state.count)
    // }, 0);
  }

  render () {
    const { count, count2 } = this.state
    console.log('嗷嗷嗷')
    return (
      <div>
        <button onClick={this.onClick}>点击</button>
        {count}
        {count2}
      </div>
    )
  }
}