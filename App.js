import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    ageField: '',
    focusedField: '',
    lastBluredField: '',
    lastSubmitedValue: '',
    lastEditedValue: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: this.state.blured ? '#00F' : '#F00',
        }}>{}</View>
        <Text>Prenume: {this.state.firstName}</Text>
        <Text>Nume: {this.state.lastName}</Text>
        <Text>Varsta: {this.state.ageField}</Text>
        <Text>Focused field: {this.state.focusedField}</Text>
        <Text>Last blured field: {this.state.lastBluredField}</Text>
        <Text>Last submited value: {this.state.lastSubmitedValue}</Text>
        <Text>Last edited value: {this.state.lastEditedValue}</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={firstName => this.setState({firstName})}
          onFocus={() => this.setState({focusedField: 'Prenume'})}
          onBlur={() => this.setState({lastBluredField: 'Prenume'})}
          onEndEditing={event => this.setState({lastEditedValue: event.nativeEvent.text})}
          onSubmitEditing={event => this.setState({lastSubmitedValue: event.nativeEvent.text})}
          value={this.state.firstName}
          placeholder="Prenume"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={lastName => this.setState({lastName})}
          onFocus={() => this.setState({focusedField: 'Nume'})}
          onBlur={() => this.setState({lastBluredField: 'Nume'})}
          onEndEditing={event => this.setState({lastEditedValue: event.nativeEvent.text})}
          onSubmitEditing={event => this.setState({lastSubmitedValue: event.nativeEvent.text})}
          value={this.state.lastName}
          placeholder="Nume"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={age => this.setState({ageField: age})}
          onFocus={() => this.setState({focusedField: 'Varsta'})}
          onBlur={() => this.setState({lastBluredField: 'Varsta'})}
          onEndEditing={event => this.setState({lastEditedValue: event.nativeEvent.text})}
          onSubmitEditing={event => this.setState({lastSubmitedValue: event.nativeEvent.text})}
          value={this.state.ageField}
          placeholder="Varsta"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '50%',
    height: 50,
  },
});

export default App;