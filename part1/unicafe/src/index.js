import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistic = ({ text, value, style }) => {
  return (
    <tr>
      <td style={style}>{text}</td>
      <td style={style}>{value}</td>
    </tr>
  ) 
}

const Statistics = ({ stats }) => {
  const [ good, neutral, bad ] = stats
  let all = good+neutral+bad

  const tableStyle = {
    border: "1px solid black", 
    borderCollapse: "collapse"
  }
  return (
    <>
    <h1>statistics</h1>
    {
      all === 0 ? <p>No feedback given</p> :
      <>
        <table style={tableStyle}>
          <tbody>
            <Statistic text="good" value={good} style={tableStyle}/>
            <Statistic text="neutral" value={neutral} style={tableStyle}/>
            <Statistic text="bad" value={bad} style={tableStyle}/>
            <Statistic text="all" value={all} style={tableStyle}/>
            <Statistic text="average" value={(good-bad)/all} style={tableStyle}/>
            <Statistic text="positive" value={`${good / (all) * 100}%`} style={tableStyle}/>
          </tbody>
        </table>
      </> 
    }
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
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <Statistics stats={[good, neutral, bad]} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)