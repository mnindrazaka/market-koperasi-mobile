import React, { Component } from 'react'
import { Button, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import Card from '../Card'
const { Image, Content, Title, Subtitle, Footer } = Card

class ProductCard extends Component {
  render() {
    return (
      <Card>
        <TouchableOpacity onPress={() => this.props.onPress()}>
          <Image
            source={{ uri: 'https://via.placeholder.com/500x150' }}
            resizeMode="stretch"
          />
          <Content>
            <Title>{this.props.title}</Title>
            <Subtitle>{this.props.description}</Subtitle>
          </Content>
          <Footer>
            <Button title="Beli" onPress={() => this.props.onButtonPress} />
          </Footer>
        </TouchableOpacity>
      </Card>
    )
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default ProductCard
