import { createStackNavigator } from 'react-navigation'

import { Products, ProductDetail } from '../scenes'

export default createStackNavigator({
  Products: { screen: Products },
  ProductDetail: { screen: ProductDetail }
})
