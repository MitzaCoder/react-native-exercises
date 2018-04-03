import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { MapView } from 'expo';

class App extends Component {
  state = {
    mapReady: false,
    region: {
      latitude: 44.415036,
      longitude: 26.169657,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
    pressedCoord: {},
    pressedPos: {},
    longPressedCoord: {},
    longPressedPos: {},
  };

  render() {
    const {
      mapReady,
      pressedCoord,
      pressedPos,
      longPressedCoord,
      longPressedPos,
      region,
    } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          onMapReady={() => this.setState({mapReady: true})}
          region={this.state.region}
          onPress={this.handleMapPress}
          onLongPress={this.handleMapLongPress}
          onRegionChangeComplete={region => this.setState({region})}
          provider="google"
        />
        <Text>{mapReady ? 'Map is ready!' : 'Map is NOT ready!'}</Text>
        <Text>Press coord:</Text>
        <Text>{pressedCoord.latitude}, {pressedCoord.longitude}</Text>
        <Text>Press point: {pressedPos.x}, {pressedPos.y}</Text>
        <Text>Long Press coord:</Text>
        <Text>{longPressedCoord.latitude}, {longPressedCoord.longitude}</Text>
        <Text>Long Press point: {`${longPressedPos.x}, ${longPressedPos.y}`}</Text>
        <Text>Current region:</Text>
        <Text>{region.latitude}, {region.longitude}</Text>
        <Text>{region.latitudeDelta}, {region.longitudeDelta}</Text>
      </View>
    );
  }

  handleMapPress = event => {
    const {
      nativeEvent: {
        coordinate,
        position,
      },
    } = event;
    this.setState({
      pressedCoord: coordinate,
      pressedPos: position
    });
  }

  handleMapLongPress = event => {
    const {
      nativeEvent: {
        coordinate,
        position,
      },
    } = event;
    this.setState({
      longPressedCoord: coordinate,
      longPressedPos: position
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  mapView: {
    width: '100%',
    height: '50%',
  },
});

export default App;