import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles' 

class AButton extends Component {
  Button = () => {
    return (
      <TouchableOpacity style={[ styles.button, this.props.style ]}>
        <Text style={ styles.labelButton }> { this.props.label } </Text>
      </TouchableOpacity>
    )
  }

  Link = () => {
    return (
      <TouchableOpacity style={[ styles.link, this.props.style ]}>
        <Text style={ styles.labelLink }> { this.props.label } </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View>
        { this.props.type === 'button' ? this.Button() : this.Link() }
      </View>
    )
  }
}

export default AButton
