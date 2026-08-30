import { useState, useEffect } from 'react'
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
      .then((response)=>{
        setJokes(response.data)
        console.log(response.data)
      }).catch((error)=>{
        console.log("Error:", error);
      })
  }, [])

  return (
    <>
      <h1>Hello Fullstack Developer</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => {
          return (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
