import React from 'react'
import { StyleSheet, View } from 'react-native'
import BookList from './BookList'

class FavoritesBooks extends React.Component {
  render(){
    return(
      <View style= {{flex: 1}}>
        <BookList
          books = {this.props.favoritesBooks}
          />
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    title_text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })


export default FavoritesBooks
