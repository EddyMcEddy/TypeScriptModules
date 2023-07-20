import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

import randomInteger from './randomInteger'

const sixSideRoll = randomInteger(0, 6) + 1

console.log(`You just rolled a ${sixSideRoll}`)

import { diognalLength, square } from './Util'

console.log(diognalLength(4, 3))

console.log(`the square of 12 is ${square(12)}`)
