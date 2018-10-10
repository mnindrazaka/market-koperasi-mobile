import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import ProductRoute from './product'
import CartRoute from './cart'

export default createMaterialBottomTabNavigator({
  Products: { screen: ProductRoute },
  Cart: { screen: CartRoute }
})
