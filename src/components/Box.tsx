import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {BoxValue} from '../types';

type BoxProps = {
  value: BoxValue;
  onPress: () => void;
  disabled?: boolean;
  highlighted?: boolean;
};

const Box: FC<BoxProps> = ({value, onPress, disabled, highlighted}) => {
  return (
    <TouchableOpacity
      style={[styles.box, highlighted ? styles.highlighted : undefined]}
      onPress={onPress}
      disabled={disabled}>
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
  highlighted: {
    backgroundColor: '#fdf363',
  },
  text: {
    fontSize: 34,
    fontWeight: '500',
  },
});

export default Box;
