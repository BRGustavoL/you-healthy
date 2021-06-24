import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import ATitle from '../../atoms/aTitle/index.js'
import styles from './styles.js'
import DateTimePicker from '@react-native-community/datetimepicker'

export default class MCalendarSchedule extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedDate: new Date(),
      selectedTime: new Date(),
      selectedFrequency: false,
      valueDate: new Date(),
      valueTime: new Date(),
      mode: {
        date: 'date',
        time: 'time'
      },
      showDate: false,
      showTime: false,
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
    this.setState({ selectedDate })
  }

  onChangeTime = (event, selectedTime) => {
    this.setState({ selectedTime })
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

  render() {
    return (
      <View style={ styles.container }>
        <ATitle
          style={ styles.pageTitle }
          title="Agendamento"
        />
        <View>
          <Text style={ styles.dateTitle }>Selecione uma data:</Text>
          <View style={ styles.dateContent }>
            <Text style={ styles.dateInput }>{ this.formatDate(this.state.selectedDate) }</Text>
            <TouchableOpacity style={ styles.dateButton } onPress={ () => this.setState({ showDate: !this.state.showDate }) }>
              <Text style={ styles.dateButtonText }>
                { 'O' }
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={ styles.hoursTitle }>Selecione um horário:</Text>
          <View style={ styles.dateContent }>
            <Text style={ styles.dateInput }>{ this.formatTime(this.state.selectedTime) }</Text>
            <TouchableOpacity style={ styles.dateButton } onPress={ () => this.setState({ showTime: !this.state.showTime }) }>
              <Text style={ styles.dateButtonText }>
                { 'O' }
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
          { this.state.showTime && (
            <DateTimePicker
              testID="timePicker"
              value={ this.state.valueTime }
              mode={ this.state.mode.time }
              is24Hour={ true }
              display="default"
              onChange={ this.onChangeTime }
            />
          ) }
        </View>
      </View>
    )
  }
}
