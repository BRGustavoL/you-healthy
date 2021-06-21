import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles.js'

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
      } else if (exercise === 'Pilates') {
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
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('Escolha um exercício') }>
          <Text>
            Fazer exercício
          </Text>
        </TouchableOpacity>
        <View style={ styles.mCardGrid }>
          <FlatList
            data={ this.props.route.params.exercises }
            renderItem={ renderItem }
            keyExtractor={ item => item.id }
          />
        </View>
      </View>
    )
  }
}
