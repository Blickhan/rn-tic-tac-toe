import {BoardState, BoxValue, Player} from './types';

/**
 *
 * @param boardState
 * @returns undefined if the game is not over, null if the game is a draw, otherwise the player who won
 */
export const getWhoWon = (boardState: BoardState): BoxValue | undefined => {
  // array of winning coordinate sets
  const winningSets = [
    // horizontal winners
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    // vertical winners
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    // diagnol winners
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let i = 0; i < winningSets.length; i++) {
    // current set of winning coordinates
    const [coords1, coords2, coords3] = winningSets[i];

    // use the first value from the set as the current potential winner
    const boxValue = boardState[coords1[0]][coords1[1]];

    // check if the winning coordinates contain the same non-null values
    if (
      boxValue !== null &&
      boardState[coords1[0]][coords1[1]] ===
        boardState[coords2[0]][coords2[1]] &&
      boardState[coords2[0]][coords2[1]] === boardState[coords3[0]][coords3[1]]
    ) {
      return boxValue;
    }
  }

  // check if the board is full (cat's game), otherwise the game is not over
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // empty box on the board so game is not over
      if (boardState[i][j] === null) {
        return;
      }

      // we have a draw
      if (i === 2 && j === 2) {
        return null;
      }
    }
  }
};

export const getPlayerTurnText = (
  playerTurn: Player,
  whoWon: Player | null | undefined,
) => {
  if (whoWon !== undefined) {
    if (whoWon === null) {
      return "Cat's game";
    } else {
      return `${whoWon} won!`;
    }
  }

  return `It's ${playerTurn}'s turn`;
};
