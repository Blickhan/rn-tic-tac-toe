import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TicTacToe from './components/TicTacToe';
import {getRandomBackgroundColor} from './utils';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    getRandomBackgroundColor(),
  );

  const onReset = () => {
    const newBackgroundColor = getRandomBackgroundColor();
    setBackgroundColor(newBackgroundColor);
  };

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor}]}>
      <TicTacToe onReset={onReset} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
