import { useState } from 'react'

const getRandomInt = (max) => Math.floor(Math.random() * max)

const incementVotes = (votes, selected) => {
  let copy = [...votes]
  copy[selected] += 1
  return copy
}

const Votes = ({ votes, selected }) => <p>has {votes[selected]} votes</p> 

const Anecdote = ({ anecdotes, selected }) => <p>{anecdotes[selected]}</p>

const MostVoted = ({ votes, anecdotes }) => {
  const maxVotes = Math.max(...votes)
  const maxIndex = votes.indexOf(maxVotes)
  return( 
    <div>
      <Anecdote anecdotes={anecdotes} selected={maxIndex} />
      <Votes votes={votes} selected={maxIndex} />
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]  
  
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)
  
  return (
    <div>
      
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <Votes votes={votes} selected={selected} />

      <table>
        <tr>
          <td><button onClick={() => setVotes(incementVotes(votes, selected))}>vote</button></td>
          <td><button onClick={() => setSelected(getRandomInt(anecdotes.length))}>next anecdote</button></td>
        </tr>
      </table>

      <h1>Anecdote with most votes</h1>
      <MostVoted votes={votes} anecdotes={anecdotes} />


    </div>
  )
}

export default App