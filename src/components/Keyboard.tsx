import React from 'react'
import { letters } from '../helpers/letters'

export const Keyboard = () => {
  return (
    <div className='keyboard'>
    {
      letters.map( (letter) => (
        <button key={letter}>{letter}</button>
      ))
    }
    </div>
  )
}
