import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import ProductRoute from './product'
import { Cart } from '../scenes'

export default createMaterialBottomTabNavigator({
  Products: { screen: ProductRoute },
  Cart: { screen: Cart }
})
