import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class BookItem extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        isFavorite: false
      }
    }

  toggleFavorite(){
    this.setState({
      isFavorite: !this.state.isFavorite
    })
  }

  displayFavoriteImage(){
    if(this.state.isFavorite){
      return(
        <Image
          source={require('../images/ic_favorite.png')}
          style={styles.favorite_image}
          />
      )
    }else{
      return(
        <Image
          source={require('../images/ic_no_favorite.png')}
          style={styles.favorite_image}
          />
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
    marginRight: 20
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
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 10
  }
})

export default BookItem
