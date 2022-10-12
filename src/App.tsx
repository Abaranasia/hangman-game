import { useState, useEffect } from 'react'

import { HangImage } from './components/HangImage'
import { Keyboard } from './components/Keyboard'
import { getRandomWord } from './helpers/getRandomWord';
import { DisplayResult } from './components/DisplayResult';

import './App.css'

function App() {
  
  const [attempts, setAttempts] = useState(0);
  const [newLetter, setNewLetter] = useState('');
  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);
  
  useEffect(() => {
    checkLetter(newLetter)
  }, [newLetter])
  
  useEffect(() => {
    if (attempts >= 9) setLose(true)
  }, [attempts]);

  useEffect(() => {
    if (!hiddenWord) return
    const currentHiddenWord= hiddenWord.replace(/\s/g, '')
      if (currentHiddenWord === word &&  attempts< 9) setWon(true)
  }, [hiddenWord]);

  const checkLetter = (letter: string) => {
    if (lose || won) return;

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

  const newGame = () => {
    setAttempts(0)
    setNewLetter('')
    setWord(getRandomWord())
    setHiddenWord('_ '.repeat(word.length))
    setLose(false)
    setWon(false)
  };

  return (
    <div className="App">
      <h1> Hangman </h1>

      {/* display result */}
      {(lose || won) && 
        <DisplayResult 
          resultValue= {(won) ?'won': 'lose'}
          word={word}
          newGame={newGame}
        />
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
