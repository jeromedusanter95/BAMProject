import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import BookItem from './BookItem'

class BookList extends React.Component {

  render(){
    return(
      <FlatList
        style={styles.list}
        data={this.props.books}
        keyExtractor={(item) => item.book_uri.toString()}
        renderItem={({item}) => (
            <BookItem
              book= {item}
              displayFavoriteImage= {this.props.displayFavoriteImage}
              />
          )}
        />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})

export default BookList
