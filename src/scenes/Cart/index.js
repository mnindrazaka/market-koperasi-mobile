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
            <Card.Title>Usaha A</Card.Title>
            <CartItem />
            <CartItem />
            <CartItem />
            <Text size="huge" bold>
              Rp. 300.000
            </Text>
          </Card.Content>
          <Card.Footer>
            <Button title="Bayar" onPress={() => navigate('Checkout')} />
          </Card.Footer>
        </Card>

        <Card marginBottom={15}>
          <Card.Content>
            <Card.Title>Usaha B</Card.Title>
            <CartItem />
            <CartItem />
            <CartItem />
            <Text size="huge" bold>
              Rp. 300.000
            </Text>
          </Card.Content>
          <Card.Footer>
            <Button title="Bayar" onPress={() => navigate('Checkout')} />
          </Card.Footer>
        </Card>

        <Card marginBottom={15}>
          <Card.Content>
            <Card.Title>Usaha C</Card.Title>
            <CartItem />
            <CartItem />
            <CartItem />
            <Text size="huge" bold>
              Rp. 300.000
            </Text>
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
