import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './styles.js'

import ATitle from '../../atoms/aTitle/index.js'
export default class MExerciseList extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const sortColorTag = (exercise) => {
      const pattern = {
        width: 10,
        height: '60%',
        borderRadius: 10,
        marginRight: 14
      }
      let result = {
        backgroundColor: '#3fbdf1',
        ...pattern
      }
      if (exercise === 'Alongamento') {
        result = {
          backgroundColor: '#1dc690',
          ...pattern
        }
      } else if (exercise === 'Agachamento') {
        result = {
          backgroundColor: '#3fbdf1',
          ...pattern
        }
      } else if (exercise === 'Polichinelo') {
        result = {
          backgroundColor: '#e95670',
          ...pattern
        }
      } else if (exercise === 'Burpes') {
        result = {
          backgroundColor: '#ff9e64',
          ...pattern
        }
      }

      return result
    }
    const Item = ({ exercise, duration, finishedAt }) => (
      <View style={styles.listItem}>
        <View style={ sortColorTag(exercise) }></View>
        <View>
          <Text style={styles.listExercise}>{ exercise.toUpperCase() }</Text>
          <Text style={styles.listDuration}>Duração: { duration }</Text>
        </View>
        <View style={ styles.listFinishedAtContent }>
          <Text style={styles.listFinishedAtLabel}> Concluido em: </Text>
          <Text style={styles.listFinishedAtValue}>{ finishedAt }</Text>
        </View>
      </View>
    )

    const renderItem = ({ item }) => (
      <Item
        exercise={ item.exercise }
        duration={ item.duration }
        finishedAt={ item.finishedAt }
      />
    )

    const sortItems = (items) => {
      items.sort((a, b) => {
        if (a.id < b.id) {
          return 1
        }
        if (a.id > b.id) {
          return -1
        }
        return 0
      })
      return items
    }
    if (this.props.route.params.exercises.length > 0) {
      return (
        <View style={ styles.container }>
          <ATitle
            title="Últimos exercícios"
          />
          <View style={ styles.exerciseFlatList }>
            <FlatList
              data={ sortItems(this.props.route.params.exercises) }
              renderItem={ renderItem }
              keyExtractor={ item => item.id.toString() }
            />
          </View>
          <TouchableOpacity
            style={ styles.newExerciseButton }
            onPress={ () => this.props.navigation.navigate('Escolha um exercício') }>
            <Text style={ styles.redirectButton }>
              Fazer novo exercício
            </Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={ styles.containerNoContent }>
          <View style={ styles.textContent }>
            <Image
              style={ styles.tiredImage }
              source={ require('../../../../assets/icons/tired.png') }
            />
            <Text style={{ fontSize: 20, letterSpacing: 2, fontWeight: 'bold', textAlign: 'center' }}>
              NÃO ACHAMOS NENHUM EXERCÍCIO
            </Text>
            <Text style={ styles.text }>
              Que tal fazer um?
            </Text>
          </View>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Escolha um exercício')}>
            <Text style={ styles.redirectButton }>
              Fazer agora
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}
