import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles.js'
import { firebase } from '../../../firebase/config.js'
export default class MExerciseCompleted extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const completedExerciesRef = firebase.firestore().collection('completed')
    return (
      <View style={ styles.exerciseCompleted }>
        <View style={ styles.textContent }>
          <Image
            style={ styles.successImage }
            source={ require('../../../../assets/icons/success.png') }
          />
          <Text style={{ fontSize: 20, letterSpacing: 2, fontWeight: 'bold' }}>
            VOCÊ ESTÁ INDO BEM!
          </Text>
          <Text style={ styles.text }>
            A cada dia que passa você fica mais saúdavel ; )
          </Text>
        </View>
        <TouchableOpacity onPress={ () => {
          completedExerciesRef.add({
            id: Date.now(),
            exercise: this.props.route.params.exerciseName,
            duration: `${this.props.route.params.exerciseDuration / 60} minutos`,
            finishedAt: `${new Date().getDate()}/${(new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}/${new Date().getFullYear()}`
          })
          this.props.navigation.navigate('Visão Geral')
        }}>
          <Text style={ styles.successButton }>
            Ir para página inicial
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
