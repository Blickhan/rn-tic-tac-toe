import {getWhoWon, getPlayerTurnText, BoardState} from '../src/utils';

describe('utils', () => {
  describe('getWhoWon', () => {
    it('should determine who won and return the set of winning coordinates', () => {
      const boardState: BoardState = [
        ['O', null, 'O'],
        ['X', 'X', 'X'],
        [null, 'O', null],
      ];

      const {whoWon, winningSet} = getWhoWon(boardState);

      expect(whoWon).toEqual('X');
      expect(winningSet).toEqual([
        [1, 0],
        [1, 1],
        [1, 2],
      ]);
    });
  });

  describe('getPlayerTurnText', () => {
    it("should display which player's turn it is if the game is not over", () => {
      const text = getPlayerTurnText('O', undefined);
      expect(text).toEqual("It's O's turn");
    });

    it("should display cat's game when it is a draw", () => {
      const text = getPlayerTurnText('O', null);
      expect(text).toEqual("Cat's game");
    });

    it('should display who won when there is a winner', () => {
      const text = getPlayerTurnText('O', 'X');
      expect(text).toEqual('X won!');
    });
  });
});
