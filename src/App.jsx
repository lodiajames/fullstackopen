import { useState } from 'react'

const anecdotes = [ 
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]
const App = () => {
   const [anex, setAnex] = useState(anecdotes.map(anecdote=>({text:anecdote, count:0})))
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)
 
const vote = () =>{
  const updatedAnex= [...anex]
  updatedAnex[selected].count +=1
  setAnex(updatedAnex)
}


 const randomAnecdotes= ()=>{
  const num = Math.floor(Math.random() * anecdotes.length)
   setSelected(num)
  
  
 }
 const maxCountAnecdote = anex.reduce((maxAnecdote, currentAnecdote) => {
  return currentAnecdote.count > maxAnecdote.count ? currentAnecdote : maxAnecdote;
}, anex[0]);


  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anex[selected]['text']} has <strong>{anex[selected].count}</strong> {anex[selected].count>0 ?"votes": "vote"}</p>
      
      <button onClick={()=>vote()}>vote</button>
      <button onClick={randomAnecdotes}>next anecdote</button>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{maxCountAnecdote.text} has <strong>{maxCountAnecdote.count}</strong> votes</p>
      </div>
    </div>
  )
  }
export default App