import React from 'react'
import { letters } from '../helpers/letters'

interface Props  {
  setLetter: Function;
}
export const Keyboard = ({setLetter}: Props) => {

  const handleClick = (letter: string) => {
    setLetter(letter)
  }
  return (
    <div className='keyboard'>
    {
      letters.map( (letter) => (
        <button 
          key={letter}
          onClick={ () => handleClick(letter)}
          >
            {letter}
          </button>
      ))
    }
    </div>
  )
}
