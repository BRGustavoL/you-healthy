import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import MExerciseRegister from './src/components/molecules/mExerciseRegister/index.js'
import MExerciseCompleted from './src/components/molecules/mExerciseCompleted/index.js'
import MTimer from './src/components/molecules/mTimer/index.js'
import MHome from './src/components/molecules/mHome/index.js'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList  } from '@react-navigation/drawer'
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
    restSpeedThreshold: 0.01
  }
}
const Home = (props) => {
  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <MHome navigation={ props.navigation } />
    </View>
  )
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
      <MTimer navigation={ props.navigation } route={ props.route } />
    </View>
  )
}

const ExerciseCompleted = (props) => {
  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <MExerciseCompleted navigation={ props.navigation } route={ props.route } />
    </View>
  )
}

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

class App extends Component {
  render () {
    return (
      <Provider store={ Store }>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Visão Geral" component={Home}
              options={{
                transitionSpec: {
                  open: config,
                  close: config
                }
              }}
            />
            <Stack.Screen name="Meus Exercícios" component={ExerciseRegister}
              options={{
                transitionSpec: {
                  open: config,
                  close: config
                }
              }}
            />
            <Stack.Screen name="Temporizador" component={Timer}
              options={{
                headerShown: false,
                transitionSpec: {
                  open: config,
                  close: config
                }
              }}
            />
            <Stack.Screen name="PARABÈNS" component={ExerciseCompleted}
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
