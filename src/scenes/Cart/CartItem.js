import React, { Component } from 'react'
import { Image, Button, Picker } from 'react-native'
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
              <Picker selectedValue="1">
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
              </Picker>
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
