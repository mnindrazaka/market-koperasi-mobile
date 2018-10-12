import React, { Component } from 'react'
import { ScrollView, Button, TouchableOpacity } from 'react-native'

import { Card, Text } from '../../components'
import { Grid, Row, Col } from 'react-native-easy-grid'

class Transactions extends Component {
  render() {
    return (
      <ScrollView padding={15}>
        <Card marginBottom={15}>
          <TouchableOpacity>
            <Card.Content>
              <Card.Title>Usaha A</Card.Title>

              <Grid>
                <Col>
                  <Text size="large">Rp. 1.000.000</Text>
                </Col>
                <Col>
                  <Text size="large" color="danger">
                    Belum Upload Bukti
                  </Text>
                </Col>
              </Grid>
            </Card.Content>
            <Card.Footer>
              <Button title="Upload Bukti" />
            </Card.Footer>
          </TouchableOpacity>
        </Card>

        <Card marginBottom={15}>
          <TouchableOpacity>
            <Card.Content>
              <Card.Title>Usaha B</Card.Title>
              <Grid>
                <Col>
                  <Text size="large">Rp. 2.500.000</Text>
                </Col>
                <Col>
                  <Text size="large">Tunggu Konfirmasi</Text>
                </Col>
              </Grid>
            </Card.Content>
          </TouchableOpacity>
        </Card>

        <Card marginBottom={15}>
          <TouchableOpacity>
            <Card.Content>
              <Card.Title>Usaha C</Card.Title>

              <Grid>
                <Col>
                  <Text size="large">Rp. 1.000.000</Text>
                </Col>
                <Col>
                  <Text size="large" color="danger">
                    Bukti Ditolak
                  </Text>
                </Col>
              </Grid>
            </Card.Content>
            <Card.Footer>
              <Button title="Upload Bukti" />
            </Card.Footer>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    )
  }
}

Transactions.navigationOptions = {
  title: 'Transaksi'
}

export default Transactions
