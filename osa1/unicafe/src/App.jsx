import { useState } from 'react'

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ text, handleClick }) => (
  <button
    onClick={handleClick}
    style={{ margin: '0.5em' }}> 
    {text}
  </button>
)

const ButtonContainer = ({ buttons }) => (
  <div>
    {buttons.map((button, i) => (
      <Button key={i} text={button.text} handleClick={button.handleClick} />
    ))}
  </div>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const StatisticLines = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttons = [
    { text: 'good', handleClick: () => setGood(good + 1) },
    { text: 'neutral', handleClick: () => setNeutral(neutral + 1) },
    { text: 'bad', handleClick: () => setBad(bad + 1) }
  ]

  return (
    <div>
      <Heading text="give feedback" />
      <ButtonContainer buttons={buttons} />
      <Heading text="StatisticLines" />
      <StatisticLines good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App