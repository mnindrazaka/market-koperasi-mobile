import { createBottomTabNavigator } from 'react-navigation'

import ProductRoute from './product'
import { Cart } from '../scenes'

export default createBottomTabNavigator({
  Products: { screen: ProductRoute },
  Cart: { screen: Cart }
})
