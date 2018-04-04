import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    age: '',
    focusedField: '',
    lastBluredField: '',
    lastSubmitedValue: '',
    lastEditedValue: '',
  };

  render() {
    const {
      firstName,
      lastName,
      age,
      focusedField,
      lastBluredField,
      lastSubmitedValue,
      lastEditedValue,
    } = this.state;
    return (
      <View style={styles.container}>
        <Text>Prenume: {firstName}</Text>
        <Text>Nume: {lastName}</Text>
        <Text>Age: {age}</Text>
        <Text>Focused field: {focusedField}</Text>
        <Text>Last blured field: {lastBluredField}</Text>
        <Text>Last submited value: {lastSubmitedValue}</Text>
        <Text>Last edited value: {lastEditedValue}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  textInput: {
    width: '50%',
    height: 50,
  }
});

export default App;