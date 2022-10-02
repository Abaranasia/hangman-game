import { useState } from 'react'

import { HangImage } from './components/HangImage'
import { Keyboard } from './components/Keyboard'

import './App.css'

function App() {
  
  const [attempts, setAttempts] = useState(0);

  return (
    <div className="App">
      <h2> Hangman </h2>

      {/* game images */}
      <HangImage imgNumber={ attempts } />

      {/* hidden word */}
      <h3>-------------</h3>

      {/* attempts counter */}
      <h3>`Attempts: ${attempts}`</h3>

      {/* letter buttons */}
      <Keyboard />
    </div>
  )
}

export default App
