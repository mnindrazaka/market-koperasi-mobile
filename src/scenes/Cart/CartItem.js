import React, { Component } from 'react'
import { Image, Button } from 'react-native'
import PropTypes from 'prop-types'

import { Grid, Col } from 'react-native-easy-grid'
import { Text, TextInput } from '../../components'

class CartItem extends Component {
  render() {
    return (
      <Grid marginBottom={15}>
        <Col size={1}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/500x150',
              width: '100%',
              height: 100
            }}
            resizeMode="stretch"
          />
        </Col>
        <Col size={2} paddingHorizontal={15}>
          <Text size="medium">Nama Produk</Text>
          <Text size="large">RP. 100.000</Text>

          <Grid>
            <Col>
              <TextInput keyboardType="number-pad" value="1" />
            </Col>
            <Col>
              <Button title="Hapus" />
            </Col>
          </Grid>
        </Col>
      </Grid>
    )
  }
}

export default CartItem
