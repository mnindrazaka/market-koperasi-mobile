import React, { Component, Fragment } from 'react'
import { Image, ScrollView, Button } from 'react-native'
import { Text } from '../../components'
import { Grid, Row, Col } from 'react-native-easy-grid'

class ProductDetail extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView flex={1} style={{ backgroundColor: 'white' }}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/500x150',
              width: '100%',
              height: 150
            }}
            resizeMode="stretch"
          />

          <Grid padding={15}>
            <Row maxHeight={15}>
              <Col>
                <Text size="small">Kategori</Text>
              </Col>
            </Row>
            <Row maxHeight={30}>
              <Col>
                <Text size="huge">Nama Produk</Text>
              </Col>
              <Col>
                <Text size="large" color="success">
                  Rp. 100.000
                </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text size="medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Text>
              </Col>
            </Row>
          </Grid>
        </ScrollView>
        <Button
          title="Tambah ke keranjang"
          onPress={() => this.props.navigation.navigate('Cart')}
        />
      </Fragment>
    )
  }
}

ProductDetail.navigationOptions = {
  title: 'Detail Produk'
}

export default ProductDetail
