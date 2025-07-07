import React, { useEffect, useState } from 'react'

function App() {
  const[count, setCount] = useState(0);

  function increaseCount(){
    //if i log count both before and after, the value will be 0. but on screen the value is changing why?
    
    setCount(count => count+1);
    
  }

  //this useEffect will only run once, or only run on mount
  //because it does not track any dependency
  useEffect(function(){
    console.log("above set Interval",count)
    setInterval(increaseCount, 1000)
  }, [])


  //this will work every time the value of count updates
  useEffect(function(){
    console.log("The count is updated to " + count);
  }, [count])
  
  
  return (
    <div>
      {count}
    </div>
  )
}

export default App