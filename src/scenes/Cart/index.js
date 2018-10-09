import React, { Component } from 'react'
import { ScrollView, Button } from 'react-native'

import { Card, Text, Margin } from '../../components'
import CartItem from './CartItem'
import { Grid, Row, Col } from 'react-native-easy-grid'

class Cart extends Component {
  render() {
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
            <Button title="Bayar" />
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
            <Button title="Bayar" />
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
            <Button title="Bayar" />
          </Card.Footer>
        </Card>
      </ScrollView>
    )
  }
}

export default Cart
