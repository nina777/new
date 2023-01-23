import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const dummyData = [{
    "no" : 1,
    "cust" : "rita",
    "ctt" : "urgent",
    "stat" : "processing"
  }, {
    "no" : 2,
    "cust" : "rita",
    "ctt" : "urgent",
    "stat" : "processing"
  }, {
    "no" : 3,
    "cust" : "rita",
    "ctt" : "urgent",
    "stat" : "processing"
  }]

  return (
    <div className="App">
      <h1>Dummy World</h1>
      <table>
        {Object.keys(dummyData[0]).map(_d => {
          return <th>{_d}</th>
        })}
      </table>
    </div>
  )
}

export default App