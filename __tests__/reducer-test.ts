import {reducer, initialState, Action, State} from '../src/reducer';

describe('reducer', () => {
  it('should select a box and toggle the active player', () => {
    const updateAction: Action = {type: 'selectBox', col: 1, row: 1};

    const {boardState, playerTurn} = reducer(initialState, updateAction);

    expect(boardState[1][1]).toEqual('X');
    expect(playerTurn).toEqual('O');
  });

  it('should determine a winner and provide the set of winning coordinates', () => {
    const state1 = reducer(initialState, {type: 'selectBox', row: 0, col: 0}); // X
    const state2 = reducer(state1, {type: 'selectBox', row: 1, col: 0}); // O
    const state3 = reducer(state2, {type: 'selectBox', row: 0, col: 1}); // X
    const state4 = reducer(state3, {type: 'selectBox', row: 1, col: 1}); // O
    const state5 = reducer(state4, {type: 'selectBox', row: 0, col: 2}); // X

    const {boardState, playerTurn, whoWon, winningSet} = state5;

    expect(boardState).toEqual([
      ['X', 'X', 'X'],
      ['O', 'O', null],
      [null, null, null],
    ]);
    expect(playerTurn).toEqual('O');
    expect(whoWon).toEqual('X');
    expect(winningSet).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
    ]);
  });

  it('should reset the game state', () => {
    const gameState: State = {
      boardState: [
        ['O', 'X', 'X'],
        [null, 'O', 'X'],
        [null, null, 'O'],
      ],
      playerTurn: 'X',
      whoWon: 'O',
      winningSet: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
    };

    const resetState = reducer(gameState, {type: 'reset'});

    expect(resetState).toEqual(initialState);
  });
});
