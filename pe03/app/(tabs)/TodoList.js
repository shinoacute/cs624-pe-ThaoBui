import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Input from './Input';
import Todo from './Todo';
import TodoButton from './TodoButton';

const filterTodos = (todos, type) => {
  switch (type) {
    case 'Active':
      return todos.filter(todo => !todo.complete);
    case 'Complete':
      return todos.filter(todo => todo.complete);
    default:
      return todos;
  }
};

const TodoList = ({
  todos,
  type,
  inputValue,
  inputChange,
  completeTodo,
  removeTodo,
  changeType,
  addTodo,
}) => {
  const filteredTodos = filterTodos(todos, type);
  return (
    <View>
      <View style={styles.box}>
        <Input inputValue={inputValue} inputChange={inputChange} />
        {filteredTodos.map(todo => (
          <Todo
            key={todo.todoIndex}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </View>
      <TouchableOpacity onPress={addTodo} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TodoButton text="All" active={type === 'All'} onPress={() => changeType('All')} />
        <TodoButton text="Active" active={type === 'Active'} onPress={() => changeType('Active')} />
        <TodoButton text="Complete" active={type === 'Complete'} onPress={() => changeType('Complete')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  submitButton: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: 'flex-end',
    height: 60,
    width: '45%',
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
  },
});

export default TodoList;