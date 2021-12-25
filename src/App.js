import React, { useEffect, useState } from 'react';

import './App.css';
import fetchGameBoard from './components/fetchGameBoard';
import { VudokuBoard } from './components/VudokuBoard';
import { VudokuControls } from './components/VudokuControls';

const emptyBoardState = {
  A: {}, B: {}, C: {},
  D: {}, E: {}, F: {},
  G: {}, H: {}, I: {},
};

function App() {
  const [gameBoard, setGameBoard] = useState({});
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    fetchGameBoard(difficulty).then((response) => {
      setGameBoard({});
      setGameBoard(emptyBoardState);
      setGameBoard({ ...emptyBoardState, ...response.puzzle});
    })
  }, [difficulty]);

  return (
    <div className="App">
      <header className="App-header">Vudoku</header>
      <div className="board-container">
        <VudokuBoard
          gameBoard={gameBoard}
        />
        <VudokuControls
          className="controls"
          setDifficulty={setDifficulty}
        ></VudokuControls>
      </div>
    </div>
  );
}

export default App;
