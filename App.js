import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Dimensions } from 'react-native'
import MExerciseRegister from './src/components/molecules/mExerciseRegister/index.js'
import MTimer from './src/components/molecules/mTimer/index.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Store } from './src/redux/index'
import { Provider } from 'react-redux'

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const ExerciseRegister = (props) => {
  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <MExerciseRegister navigation={ props.navigation } />
    </View>
  )
}

const Timer = (props) => {
  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <MTimer duration="60" navigation={ props.navigation } />
    </View>
  )
}

const Stack = createStackNavigator()

class App extends Component {
  render () {
    return (
      <Provider store={ Store }>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#01AA4F' },
            }}
          >
            <Stack.Screen
              name="ExerciseRegister"
              component={ ExerciseRegister }
              options={{
                transitionSpec: {
                  open: config,
                  close: config
                }
              }}
            />
            <Stack.Screen
              name="Timer"
              component={ Timer }
              options={{
                transitionSpec: {
                  open: config,
                  close: config
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF'
  }
})

export default App
