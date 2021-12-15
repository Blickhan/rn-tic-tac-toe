import React, {useReducer} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Board from './Board';
import {initialState, reducer} from '../reducer';
import {getPlayerTurnText} from '../utils';

const catImage = require('../assets/cat.png');

const TicTacToe = () => {
  const [{boardState, playerTurn, whoWon, winningSet}, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const onBoxPress = (col: number, row: number) => {
    dispatch({type: 'selectBox', col, row});
  };

  const onReset = () => dispatch({type: 'reset'});

  const isGameOver = whoWon !== undefined;
  const isDraw = whoWon === null;

  return (
    <View style={styles.container}>
      <ImageBackground
        key={new Date().valueOf()}
        style={styles.imageBackground}
        source={isDraw ? catImage : undefined}>
        <Board
          values={boardState}
          onBoxPress={onBoxPress}
          disabled={isGameOver}
          highlightedCoordinates={winningSet}
        />
      </ImageBackground>
      <Text style={styles.playerTurnText}>
        {getPlayerTurnText(playerTurn, whoWon)}
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
    alignItems: 'center',
  },
  imageBackground: {
    paddingTop: 160,
  },
  playerTurnText: {
    fontSize: 28,
    marginTop: 16,
  },
  resetButton: {
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 3},
    elevation: 3,
    marginTop: 64,
  },
  resetText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TicTacToe;
