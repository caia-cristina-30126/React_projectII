
import React from 'react';
import Counter from './Counter' // ./ means the current folder
import CounterHooks from './CounterHooks'

function App() {
 console.log("Render App")
  return ( 
    <>
    Counter
    <Counter initialCount = {0} />
    Counter Hooks
    <CounterHooks initial Count = {3} />
    </>
    
  )
  
}

export default App;
