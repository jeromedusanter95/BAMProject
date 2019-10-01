import React from 'react'
import { StyleSheet, View } from 'react-native'
import BookList from './BookList'
import { connect } from 'react-redux'

class FavoritesBooks extends React.Component {
  render(){
    return(
      <View style= {{flex: 1}}>
        <BookList
          books= {this.props.favoriteBooks}
          displayFavoriteImage= {false}
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

  const mapStateToProps = state => {
    return {
      favoriteBooks: state.favoriteBooks
    }
  }

export default connect(mapStateToProps)(FavoritesBooks)
