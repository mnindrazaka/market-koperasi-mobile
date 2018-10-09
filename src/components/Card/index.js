import React, { Component } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

import Image from './Image'
import Title from './Title'
import Subtitle from './Subtitle'
import Content from './Content'
import Footer from './Footer'

const Card = styled(View)`
  background-color: white;
  flex: 1;
`

Card.Image = Image
Card.Title = Title
Card.Subtitle = Subtitle
Card.Content = Content
Card.Footer = Footer

export default Card
