import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BestSellerList from '../components/BestSellerList'
import FavoriteBooks from '../components/FavoriteBooks'

const BestSellerListStackNavigator = createStackNavigator({
  BestSellerList: {
    screen: BestSellerList,
    navigationOptions: {
      title: 'List of best sellers'
    }
  }
})

const FavoriteBooksStackNavigator = createStackNavigator({
  FavoriteBooks: {
    screen: FavoriteBooks,
    navigationOptions: {
      title: 'My favorites books'
    }
  }
})

const BooksTabNavigator = createBottomTabNavigator(
  {
    BestSellerList: {
      screen: BestSellerListStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../images/ic_list.png')}
            style={styles.icon}
            />
        }
      }
    },
    Favorites: {
      screen: FavoriteBooksStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../images/ic_favorite.png')}
            style={styles.icon}
            />
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(BooksTabNavigator)
