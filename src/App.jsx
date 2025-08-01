import React, { useEffect, useState } from 'react'

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setShowTimer(currentValue => !currentValue)
    }, 5000)
  }, [])

  return (
    <div>
      {showTimer && <Timer />}
    </div>
  )
}

const Timer = () => {
  const[seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      console.log("inside the clock")
      setSeconds(prev => prev + 1)
    } , 1000)

    return function(){
      clearInterval(clock)
    }
  }, [])

  return <div>{seconds} seconds elapsed</div>
}

export default App