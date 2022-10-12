import React from 'react';
interface Props {
  resultValue: string
  word: string; 
  newGame: React.MouseEventHandler<HTMLButtonElement>;
}

export const DisplayResult = ({resultValue, word, newGame}: Props) => {
  return (
    <div className={`result ${resultValue}`}>
      <h2>PERDISTE</h2>
      <p>Fallaste la palabra {word}</p>
      <button onClick={newGame}>Otra partida</button>
   </div>
  )
}
