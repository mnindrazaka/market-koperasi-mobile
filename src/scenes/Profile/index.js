import React, { Component } from 'react'

import { ScrollView, Button } from 'react-native'
import { Card, Text } from '../../components'
import { Grid, Row, Col } from 'react-native-easy-grid'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Profile extends Component {
  render() {
    return (
      <ScrollView>
        <Card>
          <Card.Image
            source={{ uri: 'https://via.placeholder.com/500x150' }}
            resizeMode="stretch"
          />
          <Card.Content>
            <Card.Title>M. Nindra Zaka</Card.Title>
            <Text size="large">
              <Icon name="map-marker" size={20} />
              Probolinggo
            </Text>
            <Text size="large">
              <Icon name="phone" size={20} />
              085331247098
            </Text>

            <Text size="large">
              <Icon name="email" size={20} />
              mnindrazaka@gmail.com
            </Text>
          </Card.Content>
          <Card.Footer>
            <Grid>
              <Col paddingRight={5}>
                <Button title="Ubah Profil" />
              </Col>
              <Col paddingLeft={5}>
                <Button title="Usaha Saya" />
              </Col>
            </Grid>
          </Card.Footer>
        </Card>
      </ScrollView>
    )
  }
}

Profile.navigationOptions = {
  title: 'Profil Saya'
}

export default Profile
