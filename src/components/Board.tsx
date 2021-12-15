import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {BoardState} from '../types';
import Box from './Box';

type BoardProps = {
  values: BoardState;
  onBoxPress: (col: number, row: number) => void;
  disabled?: boolean;
  highlightedCoordinates?: number[][];
};

const Board: FC<BoardProps> = ({
  values,
  onBoxPress,
  disabled,
  highlightedCoordinates,
}) => {
  return (
    <View style={styles.container}>
      {values.map((rowValues, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {rowValues.map((value, colIndex) => {
            const isHighlighted =
              !!highlightedCoordinates &&
              highlightedCoordinates.some(
                coords =>
                  JSON.stringify(coords) ===
                  JSON.stringify([rowIndex, colIndex]),
              );

            return (
              <Box
                key={`${rowIndex}${colIndex}`}
                value={value}
                onPress={() => onBoxPress(rowIndex, colIndex)}
                disabled={!!value || disabled}
                highlighted={isHighlighted}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
});

export default Board;
