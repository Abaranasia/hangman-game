import { useState, useEffect } from 'react'

import { HangImage } from './components/HangImage'
import { Keyboard } from './components/Keyboard'

import './App.css'

function App() {
  
  const [attempts, setAttempts] = useState(0);
  const [word, setWord] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [newLetter, setNewLetter] = useState('');

  useEffect(() => {
    checkLetter(newLetter)
  }, [newLetter])
  
  const checkLetter = (letter: string) => {
    console.log(letter);
    // if letter is not in word, increase attempts

    if (!word.includes(letter)) {
      setAttempts( Math.min( attempts + 1, 9 ) );
      return
    };
    // Here the word will include the letter
    // To know the position of the letter we will loop the world 
    // and replace the spaces in hiddenWorld by the letter in these positions
    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter
      };
    };
    setHiddenWord( hiddenWordArray.join(' '))

  };

  return (
    <div className="App">
      <h2> Hangman </h2>

      {/* game images */}
      <HangImage imgNumber={ attempts } />

      {/* hidden word */}
      <h3>{hiddenWord}</h3>

      {/* attempts counter */}
      <h3>Attempts: {attempts}</h3>

      {/* letter buttons */}
      <Keyboard setLetter={setNewLetter} />
    </div>
  )
}

export default App
