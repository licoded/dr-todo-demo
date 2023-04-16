import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div onClick={() => setCount(count => count+1)}> {count} </div>
    </div>
  )
}

export default App
