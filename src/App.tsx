import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TicTacToe from './components/TicTacToe';

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
    backgroundColor: '#84DCC6', // color palette: #D6EDFF, #ACD7EC, #8B95C9
  },
});

export default App;
