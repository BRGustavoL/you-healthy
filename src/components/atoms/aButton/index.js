import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles' 

const Button = ({ text, onPress, backgroundColor, color, isDisabled = false, type = 'button' }) => {
  if (type === 'button') {
    if (isDisabled) {
      return (
        <TouchableOpacity
          style={ styles.buttonDisabled }
        >
          <Text style={ styles.labelButtonDisabled }> { text } </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={ onPress }
          style={[ styles.button, { backgroundColor } ]}
        >
          <Text style={[ styles.labelButton, { color } ]}> { text } </Text>
        </TouchableOpacity>
      )
    }
  } else {
    return (
      <TouchableOpacity
        onPress={ onPress }
        style={ styles.link }
      >
        <Text style={ styles.labelLink }> { text } </Text>
      </TouchableOpacity>
    )
  }
}

export default Button
