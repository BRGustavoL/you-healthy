import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class Home extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={ styles.home }>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Meus Exercícios') }>
          <Text>
            Meus Exercícios
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
