import {getWhoWon, BoardState, Player} from './utils';

export type State = {
  boardState: BoardState;
  playerTurn: Player;
  /** This is also used to infer if the game is over. null = draw, undefined = game isn't over */
  whoWon: Player | null | undefined;
  winningSet: number[][] | undefined;
};

export type Action =
  | {type: 'selectBox'; row: number; col: number}
  | {type: 'reset'};

export const initialState: State = {
  boardState: new Array(3).fill(new Array(3).fill(null)),
  playerTurn: 'X',
  whoWon: undefined,
  winningSet: undefined,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'selectBox':
      const {row, col} = action;
      // box has already been selected or game is over
      if (state.boardState[row][col] !== null || state.whoWon !== undefined) {
        return state;
      }

      // make copy of board state
      const newBoardState = state.boardState.map(function (arr) {
        return arr.slice();
      });

      // mark selected box for current player
      newBoardState[row][col] = state.playerTurn;
      const {whoWon, winningSet} = getWhoWon(newBoardState);
      return {
        boardState: newBoardState,
        playerTurn: state.playerTurn === 'X' ? 'O' : 'X', // toggle player turn
        whoWon,
        winningSet,
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}
