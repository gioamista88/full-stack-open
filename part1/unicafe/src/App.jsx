import { useState } from 'react'

const Head = ({heading}) => {
  return (
    <h2>{heading}</h2>
  )
}

const Button = ({onClick, text}) => {
  return (
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  } 

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>
        <StatisticLine text="All" value={props.all}/>
        <StatisticLine text="Average" value={props.ave}/>
        <StatisticLine text="Positive" value={props.positive}/>
      </tbody>
    </table>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood =() => {
    console.log('good is clicked:', good)
    setGood(good + 1)
  }

  const handleNeutral =() => {
    console.log('neutral is clicked:', neutral)
    setNeutral(neutral + 1)
  }

  const handleBad =() => {
    console.log('bad is clicked:', bad)
    setBad(bad + 1)
  }

  const all = good + neutral + bad
  const ave = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <Head heading="Give Feedback" />
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <Head heading="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} ave={ave} positive={positive} />
    </div>
  )
}

export default App