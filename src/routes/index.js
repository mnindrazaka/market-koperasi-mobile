import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import ProductRoute from './product'
import CartRoute from './cart'
import TransactionRoute from './transaction'
import ProfileRoute from './profile'

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

function getIcon(navigation, horizontal, tintColor) {
  const { routeName } = navigation.state
  let iconName

  if (routeName === 'Products') {
    iconName = 'archive'
  } else if (routeName === 'Cart') {
    iconName = 'cart'
  } else if (routeName === 'Transaction') {
    iconName = 'currency-usd'
  } else if (routeName === 'Profile') {
    iconName = 'account'
  }

  return (
    <MaterialIcon
      name={iconName}
      size={horizontal ? 20 : 25}
      color={tintColor}
    />
  )
}

export default createMaterialBottomTabNavigator(
  {
    Products: { screen: ProductRoute },
    Cart: { screen: CartRoute },
    Transaction: { screen: TransactionRoute },
    Profile: { screen: ProfileRoute }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) =>
        getIcon(navigation, horizontal, tintColor)
    })
  }
)
