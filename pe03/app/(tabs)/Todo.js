import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Todo = ({todo, completeTodo, removeTodo}) => (
  <View style={styles.todoContainer}>
    <Text style={[styles.todoText, todo.complete && styles.completeText]}>
      {todo.title}
    </Text>
    <View style={styles.todoButtons}>
      <TouchableOpacity onPress={() => completeTodo(todo.todoIndex)}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeTodo(todo.todoIndex)}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
  },
  todoText: {
    fontSize: 16,
    color: '#333333',
  },
  completeText: {
    textDecorationLine: 'line-through',
    color: '#CACACA',
  },
  todoButtons: {
    flexDirection: 'row',
  },
  doneText: {
    color: '#4CAF50',
    marginRight: 15,
    fontWeight: '600',
  },
  deleteText: {
    color: '#F44336',
    fontWeight: '600',
  },
});

export default Todo;