import jokeData from "./jokeData"
import Jokes from "./Jokes"



export default function App(){

  const jokeElements =jokeData.map((joke) => {
    return <Jokes 
    key = {joke.id}
    setup = {joke.setup}
    punchline = {joke.punchline}
    />
  })

  return (
    <main>
      {jokeElements}
    </main>
  )
}









