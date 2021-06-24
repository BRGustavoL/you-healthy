import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, Platform } from 'react-native'
import ATitle from '../../atoms/aTitle/index.js'
import styles from './styles.js'
import DateTimePicker from '@react-native-community/datetimepicker'
import * as Calendar from 'expo-calendar'
export default class MCalendarSchedule extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedDate: new Date(),
      selectedStartTime: new Date(),
      selectedEndTime: new Date(),
      selectedFrequency: 1,
      valueDate: new Date(),
      valueStartTime: new Date(),
      valueEndTime: new Date(),
      mode: {
        date: 'date',
        time: 'time'
      },
      showDate: false,
      showStartTime: false,
      showEndTime: false,
      columns: 1,
      options: [
        {
          id: 1,
          option: 'Diariamente'
        },
        {
          id: 2,
          option: 'Semanalmente'
        }
      ]
    }
  }

  createRows(data, columns) {
    const rows = Math.floor(data.length / columns)
    let lastRowElements = data.length - rows * columns
  
    while (lastRowElements !== columns) {
      lastRowElements += 1
    }
  
    return data
  }

  onChangeDate = (event, selectedDate) => {
    if (event.type === 'dismissed') {
      this.setState({ selectedDate: new Date(), showDate: false })
    } else {
      this.setState({ selectedDate, showDate: false })
    }
  }

  onChangeStartTime = (event, selectedStartTime) => {
    if (event.type === 'dismissed') {
      this.setState({ selectedStartTime: new Date(), showStartTime: false })
    } else {
      this.setState({ selectedStartTime, showStartTime: false })
    }
  }

  onChangeEndTime = (event, selectedEndTime) => {
    if (event.type === 'dismissed') {
      this.setState({ selectedEndTime: new Date(), showEndTime: false })
    } else {
      this.setState({ selectedEndTime, showEndTime: false })
    }
  }

  formatDate = (date) => {
    const day = (date.getDate()) < 10 ? `0${date.getDate()}` : date.getDate()
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  formatTime = (time) => {
    const hours = (time.getHours()) < 10 ? `0${time.getHours()}` : time.getHours()
    const minutes = (time.getMinutes()) < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    return `${hours}:${minutes}`
  }

  askForCalendarPermission = async () => {
    const { status } = await Calendar.requestCalendarPermissionsAsync()
    if (status === 'granted') {
      await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT)
    }
  }

  schedule = async () => {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'You Healthy' }
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'You Healthy',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER
    })

    const day = this.state.selectedDate.getDate()
    const month = this.state.selectedDate.getMonth() + 1
    const year = this.state.selectedDate.getFullYear()

    
    const startHour = this.state.selectedStartTime.getHours()
    const startMinutes = this.state.selectedStartTime.getMinutes()
    
    const endHour = this.state.selectedEndTime.getHours()
    const endMinutes = this.state.selectedEndTime.getMinutes()

    const startDate = new Date(year, month-1, day, startHour, startMinutes)
    const endDate = new Date(year, month-1, day, endHour, endMinutes)
    
    const scheduled = await Calendar.createEventAsync(newCalendarID, {
      title: 'Exercício Agendado',
      startDate: startDate,
      endDate: endDate,
      timeZone: 'America/Sao_Paulo',
      alarms: [
        {
          relativeOffset: -1,
          method: Calendar.AlarmMethod.ALERT
        }
      ],
      recurrenceRule: {
        frequency: this.state.selectedFrequency === 2 ? 'weekly' : 'daily'
      }
    })

    if (scheduled) {
      this.props.navigation.navigate('SuccessScreen', {
        image: 'schedule',
        title: 'TUDO PRONTO!',
        description: 'Seu agendamento foi concluído! Para visualiza-lo, basta acessar a agenda do seu celular.',
        path: 'Visão Geral',
        button: 'Entendi'
      })
    }
  }

  componentDidMount () {
    this.askForCalendarPermission()
  }

  render() {
    return (
      <View style={ styles.outerContainer }>
        <View style={ styles.innerContainer }>
          <ATitle
            style={ styles.pageTitle }
            title="Agendamento"
          />
          <View>
            <Text style={ styles.dateTitle }>Selecione a data:</Text>
            <View style={ styles.dateContent }>
              <Text style={ styles.dateInput }>{ this.formatDate(this.state.selectedDate) }</Text>
              <TouchableOpacity style={ styles.dateButton } onPress={ () => this.setState({ showDate: true }) }>
                <Text style={ styles.dateButtonText }>
                  { '+' }
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={ styles.hoursTitle }>Selecione o horário de início:</Text>
            <View style={ styles.dateContent }>
              <Text style={ styles.dateInput }>{ this.formatTime(this.state.selectedStartTime) }</Text>
              <TouchableOpacity style={ styles.dateButton } onPress={ () => this.setState({ showStartTime: true }) }>
                <Text style={ styles.dateButtonText }>
                  { '+' }
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={ styles.hoursTitle }>Selecione o horário de término:</Text>
            <View style={ styles.dateContent }>
              <Text style={ styles.dateInput }>{ this.formatTime(this.state.selectedEndTime) }</Text>
              <TouchableOpacity style={ styles.dateButton } onPress={ () => this.setState({ showEndTime: true }) }>
                <Text style={ styles.dateButtonText }>
                  { '+' }
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={ styles.frequencyTitle }>Selecione a frequência:</Text>
            <View style={ styles.dateContent }>
              <FlatList
                data={ this.createRows(this.state.options, this.state.columns) }
                keyExtractor={ item => item.id }
                numColumns={ this.state.columns }
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={ item.id === this.state.selectedFrequency ? styles.optionSelected : styles.option }
                      onPress={ () => this.setState({ selectedFrequency: item.id }) }
                    >
                      <View style={[{
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 14
                      }, this.props.style]}>
                        {
                          item.id === this.state.selectedFrequency ?
                            <View style={{
                              height: 24,
                              width: 24,
                              borderRadius: 12,
                              backgroundColor: '#000',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}/>
                            : null
                        }
                      </View>
                      <View style={ styles.radioInfo }>
                        <Text style={ styles.radioOption }>{ item.option }</Text>
                      </View>
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
          </View>
          <View style={ styles.scheduleForm }>
            { this.state.showDate && (
              <DateTimePicker
                testID="datePicker"
                value={ this.state.valueDate }
                mode={ this.state.mode.date }
                is24Hour={ true }
                display="default"
                onChange={ this.onChangeDate }
              />
            ) }
            { this.state.showStartTime && (
              <DateTimePicker
                testID="timeStartPicker"
                value={ this.state.valueStartTime }
                mode={ this.state.mode.time }
                is24Hour={ true }
                display="default"
                onChange={ this.onChangeStartTime }
              />
            ) }
            { this.state.showEndTime && (
              <DateTimePicker
                testID="timeEndPicker"
                value={ this.state.valueEndTime }
                mode={ this.state.mode.time }
                is24Hour={ true }
                display="default"
                onChange={ this.onChangeEndTime }
              />
            ) }
          </View>
        </View>
        <TouchableOpacity onPress={ () => {
          this.schedule()
        }}>
          <Text style={ styles.scheduleButton }>
            Agendar
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
