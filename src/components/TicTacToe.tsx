import React, {useReducer} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Board from './Board';
import {initialState, reducer} from '../reducer';
import {getPlayerTurnText} from '../utils';

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onBoxPress = (col: number, row: number) => {
    dispatch({type: 'selectBox', col, row});
  };

  const onReset = () => dispatch({type: 'reset'});

  const isGameOver = state.whoWon !== undefined;

  return (
    <View style={styles.container}>
      <Board
        values={state.boardState}
        onBoxPress={onBoxPress}
        disabled={isGameOver}
      />
      <Text style={styles.playerTurnText}>
        {getPlayerTurnText(state.playerTurn, state.whoWon)}
      </Text>
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetText}>New game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerTurnText: {
    fontSize: 28,
    marginVertical: 16,
  },
  resetButton: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {width: 3, height: 3},
  },
  resetText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TicTacToe;
