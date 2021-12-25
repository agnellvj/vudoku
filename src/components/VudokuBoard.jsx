import React, { useEffect, useState } from 'react';
import { BoardSection } from './BoardSection';

const createBoardMap = (board) => {
  const boardMap = {};

  Object.keys(board).forEach(k => {
    if (!boardMap[k[0]]) boardMap[k[0]] = {};
    if (!boardMap[k[0]][k[1]]) {
      boardMap[k[0]][k[1]] = {};
    }
    boardMap[k[0]][k[1]] = board[k];

  });

  return boardMap;
};

const generateBoardSections = (boardState) => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  const boardArr = [];
  alphabet.forEach(alpha => {
    boardArr.push(<BoardSection key={`${alpha}`} section={`${alpha}`} data={boardState[`${alpha}`]} />);
  });

  return boardArr;
};

export function VudokuBoard(props) {
  const [boardState, setBoardState] = useState({});

  useEffect(() => {
    const boardMap = createBoardMap(props.gameBoard);
    setBoardState(boardMap);
  }, [props.gameBoard]);

  return (
    <React.Fragment>
      <div className="grid board">
        {generateBoardSections(boardState)}
      </div>
    </React.Fragment>
  );
}
