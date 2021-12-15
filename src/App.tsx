import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TicTacToe from './components/TicTacToe';
import {getRandomBackgroundColor} from './utils';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TicTacToe />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: getRandomBackgroundColor(),
  },
});

export default App;
