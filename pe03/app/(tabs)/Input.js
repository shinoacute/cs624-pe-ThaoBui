import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Input = ({inputValue, inputChange, addTodo}) => (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
        value={inputValue}
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor="#CACACA"
        selectionColor="#666666"
        onChangeText={inputChange}
      />
    </View>
    <TouchableOpacity onPress={addTodo} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Submit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  inputContainer: {
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  submitButton: {
    marginTop: 20,
    alignSelf: 'flex-end',
    height: 60,
    width: '50%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Input;