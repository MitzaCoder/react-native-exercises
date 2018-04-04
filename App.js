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
        <TextInput
          style={styles.textInput}
          value={this.state.firstName}
          onChangeText={firstName => this.setState({firstName})}
          onBlur={() => this.setState({lastBluredField: 'Prenume'})}
          onFocus={() => this.setState({focusedField: 'Prenume'})}
          onSubmitEditing={event => this.setState({lastSubmitedValue: event.nativeEvent.text})}
          onEndEditing={event => this.setState({lastEditedValue: event.nativeEvent.text})}
          placeholder="Prenume"
        />
        <TextInput
          style={styles.textInput}
          value={this.state.lastName}
          onChangeText={lastName => this.setState({lastName})}
          onBlur={() => this.setState({lastBluredField: 'Nume'})}
          onFocus={() => this.setState({focusedField: 'Nume'})}
          onSubmitEditing={event => this.setState({lastSubmitedValue: event.nativeEvent.text})}
          onEndEditing={event => this.setState({lastEditedValue: event.nativeEvent.text})}
          placeholder="Nume"
        />
        <TextInput
          style={styles.textInput}
          value={this.state.age}
          onChangeText={age => this.setState({age})}
          onBlur={() => this.setState({lastBluredField: 'Varsta'})}
          onFocus={() => this.setState({focusedField: 'Varsta'})}
          onSubmitEditing={event => this.setState({lastSubmitedValue: event.nativeEvent.text})}
          onEndEditing={event => this.setState({lastEditedValue: event.nativeEvent.text})}
          placeholder="Varsta"
        />
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