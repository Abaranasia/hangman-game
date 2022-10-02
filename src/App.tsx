import { useState } from 'react'

import { HangImage } from './components/HangImage'
import { Keyboard } from './components/Keyboard'

import './App.css'

function App() {
  
  return (
    <div className="App">
      <h2> Hangman </h2>

      {/* game images */}
      <HangImage imgNumber={ 9 } />

      {/* hidden word */}
      <h3>-------------</h3>

      {/* tries counter */}
      <h3>Tries: 0</h3>

      {/* letter buttons */}
      <Keyboard />
    </div>
  )
}

export default App
