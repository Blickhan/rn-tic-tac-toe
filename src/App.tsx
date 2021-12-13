import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Board, {BoardState} from './Board';
import {getWhoWon} from './utils';

const App = () => {
  const initialPlayerTurn = 'X';
  const initialBoardState = Array(3).fill(Array(3).fill(null));
  const [boardState, setBoardState] = useState<BoardState>(initialBoardState);
  const [playerTurn, setPlayerTurn] = useState<'X' | 'O'>(initialPlayerTurn);

  const whoWon = getWhoWon(boardState);
  const isGameOver = whoWon !== undefined;

  const onPress = (col: number, row: number) => {
    const newBoardState = boardState.map(function (arr) {
      return arr.slice();
    });

    if (newBoardState[col][row] !== null || isGameOver) {
      return;
    }

    newBoardState[col][row] = playerTurn;
    setBoardState(newBoardState);
    setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
  };

  const onReset = () => {
    setPlayerTurn(initialPlayerTurn);
    setBoardState(initialBoardState);
  };

  const getPlayerTurnText = () => {
    if (isGameOver) {
      if (whoWon === null) {
        return "Cat's game";
      } else {
        return `${whoWon} won!`;
      }
    }

    return `It's ${playerTurn}'s turn`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Board values={boardState} onBoxPress={onPress} />
        <Text>{getPlayerTurnText()}</Text>
        <TouchableOpacity style={styles.button} onPress={onReset}>
          <Text>New game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 4,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default App;
