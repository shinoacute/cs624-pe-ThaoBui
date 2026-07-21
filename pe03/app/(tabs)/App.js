import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';

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
      {
        todos: newTodos,
        inputValue: '',
      },
      () => console.log('State:', this.state),
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={this.state.inputValue}
            inputChange={this.inputChange}
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