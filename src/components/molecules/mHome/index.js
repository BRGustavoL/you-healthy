import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, LogBox, ActivityIndicator } from 'react-native'
import styles from './styles'
import { firebase } from '../../../firebase/config.js'
import ATitle from '../../atoms/aTitle/index.js'

LogBox.ignoreAllLogs()

export default class Home extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      exercises: [],
      total: 0,
      isLoading: true,
      myCalendar: [],
      nextExercise: ''
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
    this.setState({ exercises: array, total: array.length, isLoading: false })
  }

  minutesTotalizer = () => {
    let result = []
    this.state.exercises.forEach(el => {
      result.push(Number(el.duration[0]))
    })
    result = result.reduce((a, b) => a + b, 0)
    let hours = result / 60
    return {
      minutes: result,
      hours: hours.toFixed(2)
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  render() {
    this.fetchData()
    if (this.state.isLoading) {
      return (
        <View style={ styles.loader }>
          <ActivityIndicator size={48} color="black" />
          <Text style={ styles.loaderText }>Aguarde mais um pouco...</Text>
        </View>
      )
    } else {
      return (
        <View style={ styles.home }>
          <ATitle
            title="Visão Geral"
          />
          <View style={ styles.exercisesCard }>
            <View style={ styles.exercisesCardTop }>
              <View>
                <Text style={ styles.subTotal }>
                  Total
                </Text>
                <Text style={[ styles.total, (this.state.total >= 1000) ? { fontSize: 40 } : { fontSize: 60 } ]} key={ this.state.total }>
                  { this.state.total }
                </Text>
              </View>
              <Image
                style={ styles.yogaImage }
                source={ require('../../../../assets/icons/yoga.png') }
              />
            </View>
            <View style={ styles.exercisesCardBottom }>
              <TouchableOpacity onPress={ () => {
                this.props.navigation.navigate('Meus Exercícios', {
                  exercises: this.state.exercises,
                  total: this.state.total
                })
              } }>
                <Text style={ styles.exercisesCardBottomText }>
                  Ver meus exercícios
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.minutesTotal }>
            <View style={ styles.left }>
              <View style={ styles.leftTag }></View>
              <View>
                <Text style={ styles.label }>Total em minutos:</Text>
                <Text style={ styles.value }>{ this.minutesTotalizer().minutes } <Text style={ styles.smallText }>min</Text></Text>
              </View>
            </View>
            <View style={ styles.right }>
              <View style={ styles.rightTag }></View>
              <View>
                <Text style={ styles.label }>Total em horas:</Text>
                <Text style={ styles.value }>{ this.minutesTotalizer().hours } <Text style={ styles.smallText }>hr</Text></Text>
              </View>
            </View>
          </View>
          <View style={ styles.calendarCard }>
            <View style={ styles.calendarCardContent }>
              <View style={ styles.calendarInfo }>
                <Text style={ styles.calendarTitle }>Próximo Exercício</Text>
                <View style={ styles.calendarPeriodContent }>
                  <View style={ styles.calendarTag }></View>
                </View>
              </View>
              <Image
                style={ styles.calendarImage }
                source={ require('../../../../assets/icons/calendar.png') }
              />
            </View>
            <View style={ styles.calendarCardButton }>
              <TouchableOpacity onPress={ () => {
                this.props.navigation.navigate('CalendarSchedule')
              } }>
                <Text style={ styles.calendarCardBottomText }>
                  Ver meus horários
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    }
  }
}
