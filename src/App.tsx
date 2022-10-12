import { useState, useEffect } from 'react'

import { HangImage } from './components/HangImage'
import { Keyboard } from './components/Keyboard'

import './App.css'

function App() {
  
  const [attempts, setAttempts] = useState(0);
  const [newLetter, setNewLetter] = useState('');
  const [word, setWord] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [lose, setLose] = useState(true);
  const [win, setWin] = useState(false);

  useEffect(() => {
    checkLetter(newLetter)
  }, [newLetter])
  
  
  useEffect(() => {
    if (attempts >= 9) setLose(true)
  }, [attempts])

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

      {lose && 
        <div className='result lose'>
          <h2>PERDISTE</h2>
          Fallaste la palabra {word}
        </div>
      }
      {win &&  
        <div className='result win'>
          <h2>GANASTE</h2>
          Acertaste la palabra {word}
        </div>
      }

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
