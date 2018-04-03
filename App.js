import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <View style={styles.avatar}>
        <View style={styles.avatarContent} />
      </View>
      <View style={styles.content}/>
      <View style={styles.meta}>
        <View style={styles.metaContent} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  row: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  avatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F00',
    borderWidth: 2,
  },
  avatarContent: {
    width: 20,
    height: 20,
    borderColor: '#00F',
    borderWidth: 1,
  },
  content: {
    flex: 3,
    borderColor: '#0F0',
    borderWidth: 2,
  },
  meta: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#00F',
    borderWidth: 2,
  },
  metaContent: {
    width: '100%',
    height: 20,
    borderColor: '#F00',
    borderWidth: 1,
  },
});

export default App;