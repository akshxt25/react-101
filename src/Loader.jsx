import React, { useEffect, useState } from 'react'

function App() {
  const[currentTab, setCurrentTab] = useState("messaging");
  const[tabData , setTabData] = useState({});
  const[loading, setLoading] = useState(true)

  useEffect(function(){
    setLoading(true)
    console.log(loading)
    console.log("send data request to tab: " + currentTab);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
      .then(async res => {
        const json = await res.json();
        setTabData(json);
        setLoading(false)
      })
  }, [currentTab])
  
  return (
    <div>
      
      <button onClick={function(){
        setCurrentTab(1)
      }} className={`${currentTab === 1 ? "text-red-500" : "text-black"} w-[100px] border`}>home</button>
      
      <button onClick={function(){
        setCurrentTab(2)
      }}
        className={`${currentTab === 2 ? "text-red-500" : "text-black"} w-[100px] border`}>messaging</button>
      
      <button onClick={function(){
        setCurrentTab(3)
      }}
        className={`${currentTab === 3 ? "text-red-500" : "text-black"} w-[100px] border`}>jobs</button>

      <button onClick={function(){
        setCurrentTab(4)
      }}
        className={`${currentTab === 4 ? "text-red-500" : "text-black"} w-[100px] border`}>people</button>

      {loading ? "Loading" : tabData.title}


    </div>
  )
}

export default App