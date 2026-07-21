import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange = value => {
    console.log('Input Value: -', value);
    this.setState({inputValue: value});
  };

  addTodo = () => {
    const {inputValue, todos} = this.state;
    if (!inputValue.trim()) return;
    const newTodos = [
      ...todos,
      {
        title: inputValue,
        todoIndex: todos.length,
        complete: false,
      },
    ];
    this.setState(
      {todos: newTodos, inputValue: ''},
      () => console.log('State:', this.state),
    );
  };

  completeTodo = todoIndex => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({todos: newTodos});
  };

  removeTodo = todoIndex => {
    const filteredTodos = this.state.todos.filter(
      todo => todo.todoIndex !== todoIndex,
    );
    this.setState({todos: filteredTodos});
  };

  changeType = type => {
    this.setState({type});
  };

  render() {
    return (
        <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
            <Heading />
            <TodoList
            todos={this.state.todos}
            type={this.state.type}
            inputValue={this.state.inputValue}
            inputChange={this.inputChange}
            completeTodo={this.completeTodo}
            removeTodo={this.removeTodo}
            changeType={this.changeType}
            addTodo={this.addTodo}
            />
        </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;