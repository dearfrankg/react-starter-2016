import React from 'react'
import Buttons from './Buttons'
import Blocks from './Blocks'

export default class App extends React.Component {
  render () {
    const {count, dec, inc} = this.props
    return (
      <div>
        <h3>React Counter App</h3>
        <Buttons {...this.props} />
        <br />
        <div>Counter: {count}</div>
        <br />
        <Blocks count={count} />
      </div>
    )
  }
}
