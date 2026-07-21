import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const TodoButton = ({text, active, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={[styles.buttonText, active && styles.activeText]}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#CACACA',
    fontSize: 14,
  },
  activeText: {
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default TodoButton;