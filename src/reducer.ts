import {BoardState, Player} from './types';
import {getWhoWon} from './utils';

type State = {
  boardState: BoardState;
  playerTurn: Player;
  /** This is also used to infer if the game is over. null = draw, undefined = game isn't over */
  whoWon: Player | null | undefined;
};

type Action = {type: 'selectBox'; col: number; row: number} | {type: 'reset'};

export const initialState: State = {
  boardState: new Array(3).fill(new Array(3).fill(null)),
  playerTurn: 'X',
  whoWon: undefined,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'selectBox':
      const {col, row} = action;
      // box has already been selected or game is over
      if (state.boardState[col][row] !== null || state.whoWon !== undefined) {
        return state;
      }

      // make copy of board state
      const newBoardState = state.boardState.map(function (arr) {
        return arr.slice();
      });

      // mark selected box for current player
      newBoardState[col][row] = state.playerTurn;
      return {
        boardState: newBoardState,
        playerTurn: state.playerTurn === 'X' ? 'O' : 'X', // toggle player turn
        whoWon: getWhoWon(newBoardState), // check if someone won
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
