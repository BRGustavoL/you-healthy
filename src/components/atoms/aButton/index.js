import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles' 

const Button = ({ text, onPress, backgroundColor, color }) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={[ styles.button, { backgroundColor } ]}
    >
      <Text style={[ styles.labelButton, { color } ]}> { text } </Text>
    </TouchableOpacity>
  )
}

const Link = () => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={[ styles.link, this.props.style ]}
    >
      <Text style={ styles.labelLink }> { text } </Text>
    </TouchableOpacity>
  )
}

export default Button
