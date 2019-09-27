import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getListHardCoverFictionBestSellers } from './api/BooksApi'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ getListHardCoverFictionBestSellers().then( response => {
        console.log(response)
      }).toString()
      }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
