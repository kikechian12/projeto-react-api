import React from 'react';
import { StyleSheet, View } from 'react-native';
import PhotoList from './components/fotos.js';

export default function App() {
  return (
    <View style={styles.container}>
      <PhotoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
