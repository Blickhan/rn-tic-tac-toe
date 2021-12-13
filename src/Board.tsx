import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Value = 'X' | 'O' | null;

export type BoardState = Value[][];

type BoxProps = {
  value: Value;
  onPress?: () => void;
};

const Box: FC<BoxProps> = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
};

type BoardProps = {
  values: BoardState;
  onBoxPress?: (col: number, row: number) => void;
};

const Board: FC<BoardProps> = ({values, onBoxPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {values[0].map((value, index) => {
          return <Box value={value} onPress={() => onBoxPress?.(0, index)} />;
        })}
      </View>
      <View style={styles.row}>
        {values[1].map((value, index) => {
          return <Box value={value} onPress={() => onBoxPress?.(1, index)} />;
        })}
      </View>
      <View style={styles.row}>
        {values[2].map((value, index) => {
          return <Box value={value} onPress={() => onBoxPress?.(2, index)} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 2,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    borderWidth: 2,
    borderColor: 'black',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Board;
