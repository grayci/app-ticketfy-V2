import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainActivity from './components/MainActivity'
import EventsActivity from './components/EventsActivity'
import FavoritesActivity from './components/FavoritesActivity'
import CartActivity from './components/CartActivity'

import './fixtimebug' // <<<<<<<<<<<<<<<<<<

const RootStack = createStackNavigator(
  {
    MainActivity: MainActivity,
    EventsActivity: EventsActivity,
    FavoritesActivity: FavoritesActivity,
    CartActivity: CartActivity
  },
  {
    initialRouteName: 'MainActivity',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        height: 70,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0
      },
      headerTintColor: '#838383',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24
      }
    }
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
