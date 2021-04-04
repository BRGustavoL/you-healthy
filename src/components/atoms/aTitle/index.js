import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class ATitle extends Component {
  render() {
    return (
      <View>
        <Text style={[ styles.title, this.props.style ]}> { this.props.title } </Text>
      </View>
    )
  }
}

export default ATitle
