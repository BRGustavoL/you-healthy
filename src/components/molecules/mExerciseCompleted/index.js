import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles.js'

export default class MExerciseCompleted extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={ styles.exerciseCompleted }>
        <View style={ styles.textContent }>
          <Image
            style={ styles.successImage }
            source={ require('../../../../assets/icons/success.png') }
          />
          <Text style={{ fontSize: 20, letterSpacing: 2, fontWeight: 'bold' }}>
            EXERCÍCIO COMPLETADO
          </Text>
          <Text style={ styles.text }>
            A cada dia que passa você fica mais saúdavel ; )
          </Text>
        </View>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Visão Geral') }>
          <Text style={ styles.successButton }>
            PÁGINA INICIAL
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
