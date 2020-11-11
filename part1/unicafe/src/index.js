import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ stats }) => {
  const [ good, neutral, bad ] = stats
  let all = good+neutral+bad

  return (
  <>
    <h1>statistics</h1>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>all {all}</p>
    <p>average {(good-bad)/(all)}</p>
    <p>positive {good/(all) * 100}%</p>
  </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics stats={[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)