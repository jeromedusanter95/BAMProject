import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class BookItem extends React.Component {

  render() {
    return (
      <View style={styles.main_container}>
          <Text style={styles.title_text}>{this.props.book.title}</Text>
          <Text style={styles.author_text}>{this.props.book.author}</Text>
          <Text style={styles.description_text} numberOfLines={6}>{this.props.book.description}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 8
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingRight: 5
  },
  author_text: {
    fontSize: 16,
    paddingRight: 5
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  }
})

export default BookItem
