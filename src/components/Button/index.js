import { Button } from 'react-native'
import styled from 'styled-components'

function setBackgroundColor(bgColor) {
  if (bgColor == 'primary') return '#5677fc'
  else if (bgColor == 'secondary') return '#353535'
  else if (bgColor == 'success') return '#779933'
  else if (bgColor == 'warning') return '#ff9800'
  else if (bgColor == 'danger') return '#e51c23'
  else return '#5677fc'
}

export default styled(Button)`
  background-color: 'red';
`
