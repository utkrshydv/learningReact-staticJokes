import React from "react"

export default function Joke(joke){

  const[isShown, setIsShown] = React.useState(false)

  function toggle(){
    setIsShown(prevState => !prevState)
  }

  return(
  <>

{joke.setup &&<h1>Setup: {joke.setup} </h1>}
{isShown &&<h2>Punchline: {joke.punchline} </h2>}
<button onClick={toggle}>{isShown?"Hide" : "Show"} Punchline</button>
<hr/>
  </>
  )
  
}