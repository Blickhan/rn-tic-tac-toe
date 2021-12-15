import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BoxValue} from '../types';

type BoxProps = {
  value: BoxValue;
  onPress: () => void;
  disabled?: boolean;
};

const Box: FC<BoxProps> = ({value, onPress, disabled}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 3,
    borderColor: 'black',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: '500',
  },
});

export default Box;
