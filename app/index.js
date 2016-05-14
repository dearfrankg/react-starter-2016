import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {observe, dec, inc} from './store'

const app = document.getElementById('app')

observe(store => {
  ReactDOM.render(
    <App
      count={store.count}
      dec={dec}
      inc={inc} />,
    app
  )
})
