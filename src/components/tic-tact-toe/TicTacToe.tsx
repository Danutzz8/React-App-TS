import React, { useEffect, useState } from "react";
import "./index.scss";

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [status, setStatus] = useState<string>("");

  const winningPatterns: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
  ];

  const getWinner = (squares: string[]): string | null => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  };

  const handleClick = (index: number): void => {
    const cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[index]) return;
    cpySquares[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  const handleRestart = (): void => {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
    setStatus("");
  };

  useEffect(() => {
    const winner = getWinner(squares);
    if (!winner && squares.every((item) => item !== "")) {
      setStatus("This is a draw! Please restart the game.");
    } else if (winner) {
      setStatus(`Winner is ${winner}. Please restart the game.`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        {squares.slice(0, 3).map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="row">
        {squares.slice(3, 6).map((value, index) => (
          <Square
            key={index + 3}
            value={value}
            onClick={() => handleClick(index + 3)}
          />
        ))}
      </div>
      <div className="row">
        {squares.slice(6, 9).map((value, index) => (
          <Square
            key={index + 6}
            value={value}
            onClick={() => handleClick(index + 6)}
          />
        ))}
      </div>
      <h1>{status}</h1>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default TicTacToe;