import React, { Component } from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

class AInput extends Component {
  render() {    
    return (
      <TextInput 
        style={[ styles.input, this.props.style ] }
        placeholder={ this.props.placeholder }
        type={ this.props.type }
      />
    )
  }
}

export default AInput
