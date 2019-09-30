import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BestSellerList from './components/BestSellerList'

export default function App() {
  return (
    <View style={styles.container}>
      <BestSellerList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  }
});
