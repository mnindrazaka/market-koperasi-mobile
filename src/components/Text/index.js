import { Text } from 'react-native'
import styled from 'styled-components'

function setFontSize(size) {
  if (size == 'small') return 12
  else if (size == 'medium') return 14
  else if (size == 'large') return 16
  else if (size == 'huge') return 18
  else return 11
}

function setColor(color) {
  if (color == 'primary') return '#131313'
  else if (color == 'secondary') return '#353535'
  else if (color == 'success') return '#779933'
  else if (color == 'warning') return '#ff9800'
  else if (color == 'error') return '#e51c23'
  else return '#131313'
}

export default styled(Text)`
  font-size: ${props => setFontSize(props.size)};
  color: ${props => setColor(props.color)};
`
