import React, { Component } from 'react'
import { View, Animated, Modal, Text, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setTimer } from '../../../redux/actions/index.js'

import styles from './styles.js'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import ATitle from '../../atoms/aTitle/index.js'
import AButton from '../../atoms/aButton/index.js'

class MTimer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: false,
      isPlaying: true
    }
  }
  render() {
    return (
      <View style={ this.state.isVisible ? styles.mTimerOutFocus : styles.mTimer }>
        <ATitle
          style={ styles.mTitle }
          title={ this.props.exercise.name }
        />

        <View style={ styles.container }>
          <CountdownCircleTimer
            size={ 320 }
            trailStrokeWidth={ 8 }
            strokeWidth={ 10 }
            isPlaying={ this.state.isPlaying }
            duration={ this.props.exercise.duration }
            colors="#fff"
            onComplete={() => {
              return [true, 0]
            }}
          >
            {({ remainingTime, animatedColor }) => (
              <View style={ styles.insideCircle }>
                <Animated.Text
                  style={ this.state.isPlaying ? styles.remainingTime : styles.stopedTime }>
                  { this.state.isPlaying ? remainingTime : 'Pausado' }
                </Animated.Text>
                <Animated.Text
                  style={ styles.secondsText }>
                  { this.state.isPlaying ? 'segundos' : '' }
                </Animated.Text>
              </View>
            )}
          </CountdownCircleTimer>
        </View>
        <Modal
          animationType="slide"
          transparent={ true }
          visible={ this.state.isVisible }
        >
          <View style={ styles.centeredView }>
            <View style={ styles.modalView }>
              <Text style={ styles.question }>Quer mesmo parar?</Text>
              <View style={ styles.actionButtons }>
                <AButton
                  text="Voltar"
                  type="link"
                  onPress={ () => this.setState({ isVisible: false, isPlaying: true }) }
                />
                <AButton
                  text="Quero"
                  color="white"
                  backgroundColor="#F78E00"
                />
              </View>
            </View>
          </View>
        </Modal>
        <AButton
          text="Parar"
          color="black"
          backgroundColor="white"
          onPress={ () => this.setState({ isVisible: true, isPlaying: false }) }
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
