import { createStackNavigator } from 'react-navigation'

import { Cart, Checkout } from '../scenes'

export default createStackNavigator({
  Cart: { screen: Cart },
  Checkout: { screen: Checkout }
})
