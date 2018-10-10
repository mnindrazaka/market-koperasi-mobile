import React, { Component } from 'react'
import { ScrollView, Button } from 'react-native'

import { Card, Text, Margin } from '../../components'
import CartItem from './CartItem'
import { Grid, Row, Col } from 'react-native-easy-grid'

class Cart extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <ScrollView>
        <Card marginBottom={15}>
          <Card.Content>
            <Text size="large" marginBottom={15}>
              Usaha A
            </Text>

            <CartItem />
            <CartItem />
            <CartItem />
          </Card.Content>
          <Card.Footer>
            <Button title="Bayar" onPress={() => navigate('Checkout')} />
          </Card.Footer>
        </Card>

        <Card marginBottom={15}>
          <Card.Content>
            <Text size="large" marginBottom={15}>
              Usaha B
            </Text>

            <CartItem />
            <CartItem />
            <CartItem />
          </Card.Content>
          <Card.Footer>
            <Button title="Bayar" onPress={() => navigate('Checkout')} />
          </Card.Footer>
        </Card>

        <Card marginBottom={15}>
          <Card.Content>
            <Text size="large" marginBottom={15}>
              Usaha C
            </Text>

            <CartItem />
            <CartItem />
            <CartItem />
          </Card.Content>
          <Card.Footer>
            <Button title="Bayar" onPress={() => navigate('Checkout')} />
          </Card.Footer>
        </Card>
      </ScrollView>
    )
  }
}

Cart.navigationOptions = {
  title: 'Keranjang'
}

export default Cart
