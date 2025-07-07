import React, { useEffect, useState } from 'react'

function App() {
  const[currentTab, setCurrentTab] = useState("messaging");

  useEffect(function(){
    console.log("send data request to tab: " + currentTab);
  }, [currentTab])
  
  return (
    <div>
      {/* these work fine, because onClick requires a function */}
      <button onClick={function(){
        setCurrentTab("home")
      }} className={`${currentTab === "home" ? "text-red-500" : "text-black"} w-[100px] border`}>home</button>
      
      <button onClick={function(){
        setCurrentTab("messaging")
      }}
        className={`${currentTab === "messaging" ? "text-red-500" : "text-black"} w-[100px] border`}>messaging</button>
      
      <button onClick={function(){
        setCurrentTab("jobs")
      }}
        className={`${currentTab === "jobs" ? "text-red-500" : "text-black"} w-[100px] border`}>jobs</button>

      <button onClick={function(){
        setCurrentTab("people")
      }}
        className={`${currentTab === "people" ? "text-red-500" : "text-black"} w-[100px] border`}>people</button>


        {/* this is not fine because, onClick requires a function and what 
        is written below equivalents to "undefined" */}
        {/* <button onClick={setCurrentTab("demo")}
          className={`${currentTab === "demo" ? "text-red-500" : "text-black"} w-[100px] border`}>demo</button> */}

    </div>
  )
}

export default App