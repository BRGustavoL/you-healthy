import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles' 

const Button = ({ text, onPress, ownStyle }) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={[ styles.button, ownStyle ]}
    >
      <Text style={ styles.labelButton }> { text } </Text>
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
