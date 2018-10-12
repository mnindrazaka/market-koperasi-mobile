import { createStackNavigator } from 'react-navigation'
import { Transaction } from '../scenes'

export default createStackNavigator({
  Transaction: { screen: Transaction }
})
