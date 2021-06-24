import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles.js'

export default class ASuccessScreen extends Component {
  constructor (props) {
    super(props)
  }

  image = () => {
    if (this.props.route.params.image === 'schedule') {
      return (
        <Image
          style={ styles.blueImage }
          source={ require('../../../../assets/icons/schedule.png') }
        />
      )
    } else if (this.props.route.params.image === 'success') {
      return (
        <Image
          style={ styles.blueImage }
          source={ require('../../../../assets/icons/success.png') }
        />
      )
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.textContent }>
          { this.image() }
          <Text style={{ fontSize: 20, letterSpacing: 2, fontWeight: 'bold', textAlign: 'center' }}>
            { this.props.route.params.title }
          </Text>
          <Text style={ styles.text }>
            { this.props.route.params.description }
          </Text>
        </View>
        <TouchableOpacity
          style={ styles.actionButton }
          onPress={ () => this.props.navigation.navigate(this.props.route.params.path)}>
          <Text style={ styles.redirectButton }>
            { this.props.route.params.button }
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
