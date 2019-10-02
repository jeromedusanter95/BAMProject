import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ChangeImageSize from '../animations/ChangeImageSize'

class BookItem extends React.Component {

  toggleFavorite(){
    const action = {
      type: "TOGGLE_FAVORITE",
      value: this.props.book
    }
    this.props.dispatch(action)
  }

  displayFavoriteImage(){
    if(!this.props.displayFavoriteImage){
      return null
    }else if(this.props.favoriteBooks.findIndex(item => item.primary_isbn10 == this.props.book.primary_isbn10) !== -1){
      return(
        <ChangeImageSize shouldEnlarge={true}>
          <Image
            source={require('../images/ic_favorite.png')}
            style={styles.favorite_image}
            />
        </ChangeImageSize>
      )
    }else{
      return(
      <ChangeImageSize shouldEnlarge={false}>
        <Image
          source={require('../images/ic_no_favorite.png')}
          style={styles.favorite_image}
          />
        </ChangeImageSize>
      )
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.text_container}>
          <Text style={styles.title_text}>{this.props.book.title}</Text>
          <Text style={styles.author_text}>{this.props.book.author}</Text>
          <Text style={styles.description_text} numberOfLines={6}>{this.props.book.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.toggleFavorite()}
          >
          {this.displayFavoriteImage()}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center'
  },
  text_container:{
    flex: 1,
    marginRight: 30
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
  },
  favorite_image: {
    flex: 1,
    width: null,
    height: null,
    marginTop: 10,
    marginRight: 10
  }
})

const mapStateToProps = state => {
  return {
    favoriteBooks: state.favoriteBooks
  }
}

export default connect(mapStateToProps)(BookItem)
