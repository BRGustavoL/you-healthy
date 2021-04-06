import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import styles from './styles.js'

import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import ATitle from '../../atoms/aTitle/index.js'



class MTimer extends Component {
  render() {
    return (
      <View style={ styles.mTimer }>
        <ATitle style={ styles.mTitle } title="Create log" />

        <View style={ styles.container }>
          <CountdownCircleTimer
            size={ 320 }
            trailStrokeWidth={ 8 }
            strokeWidth={ 10 }
            isPlaying
            duration={ this.props.duration }
            colors={[
              ['#00CC66', 0.6],
              ['#0D7BFF', 0.3],
              ['#FF2D0D', 0.2],
            ]}
            // onComplete={ () => someFunction() }
          >
            {({ remainingTime, animatedColor }) => (
              <View style={ styles.insideCircle }>
                <Animated.Text
                  style={{ ...styles.topText, color: animatedColor }}>
                  Boora!
                </Animated.Text>
                <Animated.Text
                  style={{ ...styles.remainingTime, color: animatedColor }}>
                  { remainingTime }
                </Animated.Text>
                <Animated.Text
                  style={{ ...styles.bottomText, color: animatedColor }}>
                  Just Do It!
                </Animated.Text>
              </View>
            )}
          </CountdownCircleTimer>
        </View>
      </View>
    )
  }
}

export default MTimer
