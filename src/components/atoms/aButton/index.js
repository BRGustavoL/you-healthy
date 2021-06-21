import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles' 

const Button = ({ label, isDisabled = false, onPress }) => {
  if (isDisabled) {
    return (
      <TouchableOpacity>
        <Text style={ styles.buttonDisabled }>
          { label }
        </Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity onPress={ onPress }>
        <Text style={ styles.buttonEnabled }>
          { label }
        </Text>
      </TouchableOpacity>
    )
  }
}

export default Button
