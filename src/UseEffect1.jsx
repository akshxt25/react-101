import React, { useEffect, useState } from 'react'

function Clock() {
  const[count, setCount] = useState(0);

  function increaseCount(){
    //if i log count both before and after, the value will be 0. but on screen the value is changing why?
    
    setCount(count => count+1);
    
  }

  useEffect(function(){
    console.log("above set Interval",count)
    setInterval(increaseCount, 1000)
  }, [])
  
  
  return (
    <div>
      {count}
    </div>
  )
}

export default Clock