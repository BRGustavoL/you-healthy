import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setTimer } from '../../../redux/actions/index.js'
import styles from './styles.js'
import CountDown from 'react-native-countdown-component'

import ATitle from '../../atoms/aTitle/index.js'
import AButton from '../../atoms/aButton/index.js'

import { firebase } from '../../../firebase/config.js'
class MTimer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: this.props.exercise.duration
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ timer: newProps.exercise.duration })
  }

  render() {
    const completedExerciesRef = firebase.firestore().collection('completed')
    return (
      <View style={ styles.container }>
        <View style={ styles.content }>
          <ATitle
            title={ this.props.exercise.name }
          />
          <View style={ styles.countdown }>
            <CountDown
              key={ this.state.timer }
              until={ 2 }
              onFinish={() => {
                completedExerciesRef.add({
                  id: Date.now(),
                  exercise: this.props.exercise.name,
                  duration: (this.state.timer / 60) > 1 ? `${this.state.timer / 60} minutos` : `${this.state.timer / 60} minuto`,
                  finishedAt: `${new Date().getDate()}/${(new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}/${new Date().getFullYear()}`
                })
                this.props.navigation.navigate('SuccessScreen', {
                  image: 'success',
                  title: 'VOCÊ ESTÁ INDO BEM!',
                  description: 'A cada dia que passa você fica mais saúdavel ; )',
                  path: 'Visão Geral',
                  button: 'Voltar para tela inicial'
                })
              }}
              digitStyle={{ backgroundColor: 'black' }}
              digitTxtStyle={{ color: 'white' }}
              size={60}
              timeToShow={['M', 'S']}
              timeLabels={{m: 'Minutos', s: 'Segundos'}}
              timeLabelStyle={{ color: 'black', fontSize: 18 }}
              showSeparator
            />
          </View>
        </View>
        <View style={ styles.backButton }>
          <AButton
            label="Voltar"
            onPress={ () => {
              this.props.navigation.goBack()
            }}
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setTimer }, dispatch)
const mapStateToProps = store => ({
  exercise: store.timerState.exercise
})

export default connect(mapStateToProps, mapDispatchToProps)(MTimer)
