import { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  // state Hook:
  const [counter, setCounter] = useState<number>(0)
  // handle counter:
  const handleCounter = (operation: string): void => {
    if (operation === 'add') {
      return setCounter(counter + 1)
    }
    return setCounter(counter - 1)
  }

  return (
    <div className="App">
      <p>counter:{counter}</p>
      <button type="button" onClick={() => handleCounter('add')}>
        Increment
      </button>
      <button type="button" onClick={() => handleCounter('dec')}>
        Decrement
      </button>
    </div>
  )
}

export default App
