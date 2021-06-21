import React, { Component } from 'react'
import { View, Animated, Modal, Text, LogBox } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setTimer } from '../../../redux/actions/index.js'
import { firebase } from '../../../firebase/config.js'
import styles from './styles.js'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import ATitle from '../../atoms/aTitle/index.js'
import AButton from '../../atoms/aButton/index.js'

LogBox.ignoreAllLogs()
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
    return (
      <View style={ styles.mTimer }>
        <ATitle
          style={ styles.mTitle }
          title={ this.props.exercise.name.toUpperCase() }
        />

        <CountdownCircleTimer
          key={ this.state.timer }
          style={ styles.mCountdownTimer }
          isPlaying
          duration={ this.state.timer }
          colors="#3fbdf1"
          onComplete={() => {
            this.props.navigation.navigate('Exercício Completado', { exerciseName: this.props.exercise.name, exerciseDuration: this.props.exercise.duration })
          }}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
              { remainingTime }
            </Animated.Text>
          )}
        </CountdownCircleTimer>

        <AButton
          text="VOLTAR"
          color="#3fbdf1"
          onPress={ () => {
            this.props.navigation.goBack()
          }}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setTimer }, dispatch)
const mapStateToProps = store => ({
  exercise: store.timerState.exercise
})

export default connect(mapStateToProps, mapDispatchToProps)(MTimer)
