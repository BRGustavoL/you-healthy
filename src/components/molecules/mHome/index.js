import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, LogBox } from 'react-native'
import styles from './styles'
import { firebase } from '../../../firebase/config.js'

LogBox.ignoreAllLogs()

export default class Home extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      exercises: [],
      total: 0
    }
  }

  fetchData = async () => {
    const db = firebase.firestore()
    const response = db.collection('completed')
    const array = []
    const data = await response.get()
    data.docs.forEach(el => {
      array.push(el.data())
    })
    this.setState({ exercises: array, total: array.length })
  }

  componentDidMount () {
    this.fetchData()
  }

  render() {
    this.fetchData()
    return (
      <View style={ styles.home }>
        <View style={ styles.exercisesCard }>
          <View style={ styles.exercisesCardTop }>
            <View>
              <Text style={ styles.subTotal }>
                Total:
              </Text>
              <Text style={ styles.total } key={ this.state.total }>
                { this.state.total }
              </Text>
            </View>
            <Image
              style={ styles.yogaImage }
              source={ require('../../../../assets/icons/yoga.png') }
            />
          </View>
          <View style={ styles.exercisesCardBottom }>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Meus Exercícios', {
              exercises: this.state.exercises,
              total: this.state.total
            }) }>
              <Text style={ styles.exercisesCardBottomText }>
                Ver meus exercícios
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
