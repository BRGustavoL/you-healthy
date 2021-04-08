import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setTimer } from '../../../redux/actions/index.js'

import styles from './styles.js'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import ATitle from '../../atoms/aTitle/index.js'
import AButton from '../../atoms/aButton/index.js'

class MTimer extends Component {
  render() {
    return (
      <View style={ styles.mTimer }>
        <ATitle
          style={ styles.mTitle }
          title={ this.props.exercise.name }
        />

        <View style={ styles.container }>
          <CountdownCircleTimer
            size={ 320 }
            trailStrokeWidth={ 8 }
            strokeWidth={ 10 }
            isPlaying
            duration={ this.props.exercise.duration }
            colors="#fff"
            onComplete={() => {
              return [true, 0]
            }}
          >
            {({ remainingTime, animatedColor }) => (
              <View style={ styles.insideCircle }>
                <Animated.Text
                  style={ styles.topText }>
                  Boora!
                </Animated.Text>
                <Animated.Text
                  style={ styles.remainingTime }>
                  { remainingTime }
                </Animated.Text>
                <Animated.Text
                  style={ styles.bottomText }>
                  Just Do It!
                </Animated.Text>
              </View>
            )}
          </CountdownCircleTimer>
        </View>
        <AButton
          text="Parar"
          color="black"
          backgroundColor="white"
          onPress={ () => console.log(this.props.exercise) }
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
