import React from 'react'
import { StyleSheet, View, Button, ActivityIndicator, Text } from 'react-native'
import BookList from './BookList'
import { getListHardCoverFictionBestSellers } from '../api/BooksApi'

class BestSellerList extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        books: [],
        isLoading: false,
        title: ""
      }
    }

  componentDidMount(){
    this.setState({ isLoading : true})
    getListHardCoverFictionBestSellers().then( response => {
      this.setState({
        books: response.results.books,
        isLoading: false,
        title: response.results.list_name
      })
    })
  }

  displayLoading(){
    if(this.state.isLoading){
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
  }

  render(){
    return(
      <View style= {{flex: 1}}>
        <Text style={styles.title_text}>{this.state.title}</Text>
        <BookList
          books = {this.state.books}
          displayFavoriteImage= {true}
          />
        {this.displayLoading()}
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    title_text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })


export default BestSellerList
