import React, { Component } from 'react'
import { Picker, ScrollView, Button } from 'react-native'
import { Text, Card, TextInput } from '../../components'
import { Grid, Row, Col } from 'react-native-easy-grid'

class Checkout extends Component {
  render() {
    return (
      <ScrollView>
        <Grid>
          <Row padding={5}>
            <Col padding={5}>
              <Card>
                <Card.Image
                  source={{ uri: 'https://via.placeholder.com/500x150' }}
                  resizeMode="stretch"
                />
                <Card.Content>
                  <Card.Title>JNE</Card.Title>
                </Card.Content>
              </Card>
            </Col>

            <Col padding={5}>
              <Card>
                <Card.Image
                  source={{ uri: 'https://via.placeholder.com/500x150' }}
                  resizeMode="stretch"
                />
                <Card.Content>
                  <Card.Title>POS</Card.Title>
                </Card.Content>
              </Card>
            </Col>
          </Row>

          <Row padding={5}>
            <Col padding={5}>
              <Card>
                <Card.Content>
                  <Card.Title>Lokasi Pengiriman</Card.Title>

                  <Text size="medium">Provinsi</Text>
                  <Picker>
                    <Picker.Item label="Provinsi 1" value="provinsi1" />
                    <Picker.Item label="Provinsi 2" value="provinsi2" />
                    <Picker.Item label="Provinsi 3" value="provinsi3" />
                  </Picker>

                  <Text size="medium">Kecamatan</Text>
                  <Picker>
                    <Picker.Item label="Kecamatan 1" value="kecamatan1" />
                    <Picker.Item label="Kecamatan 2" value="kecamatan2" />
                    <Picker.Item label="Kecamatan 3" value="kecamatan3" />
                  </Picker>

                  <Text size="medium">Alamat Lengkap</Text>
                  <TextInput placeholder="Masukkan Alamat Lengkap" />
                </Card.Content>
              </Card>
            </Col>
          </Row>

          <Row padding={5}>
            <Col padding={5}>
              <Button title="Selesai" />
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    )
  }
}

Checkout.navigationOptions = {
  title: 'Pengiriman'
}

export default Checkout
