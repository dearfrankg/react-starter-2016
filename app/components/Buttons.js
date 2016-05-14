import React from 'react'

export default class Buttons extends React.Component {
  render () {
    const { inc, dec } = this.props
    return (
      <div>
        <button onClick={dec}>decrement</button>
        {' '}
        <button onClick={inc}>increment</button>
      </div>
    )
  }
}
