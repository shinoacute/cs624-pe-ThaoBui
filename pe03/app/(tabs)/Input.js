import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({inputValue, inputChange}) => (
  <TextInput
    value={inputValue}
    style={styles.input}
    placeholder="What needs to be done?"
    placeholderTextColor="#CACACA"
    selectionColor="#666666"
    onChangeText={inputChange}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Input;