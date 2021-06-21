import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import MExerciseRegister from './src/components/molecules/mExerciseRegister/index.js'
import MExerciseCompleted from './src/components/molecules/mExerciseCompleted/index.js'
import MExerciseList from './src/components/molecules/mExerciseList/index.js'
import MTimer from './src/components/molecules/mTimer/index.js'
import MHome from './src/components/molecules/mHome/index.js'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Store } from './src/redux/index'
import { Provider } from 'react-redux'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={ styles.container }>
        <StatusBar style="auto" />
        <MHome navigation={ props.navigation } />
      </View>
    </SafeAreaView>
  )
}

const ExerciseRegister = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={ styles.container }>
        <StatusBar style="auto" />
        <MExerciseRegister navigation={ props.navigation } />
      </View>
    </SafeAreaView>
  )
}

const Timer = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={ styles.container }>
        <StatusBar style="auto" />
        <MTimer navigation={ props.navigation } route={ props.route } />
      </View>
    </SafeAreaView>
  )
}

const ExerciseList = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={ styles.container }>
        <StatusBar style="auto" />
        <MExerciseList navigation={ props.navigation } route={ props.route } />
      </View>
    </SafeAreaView>
  )
}

const ExerciseCompleted = (props) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={ styles.container }>
        <StatusBar style="auto" />
        <MExerciseCompleted navigation={ props.navigation } route={ props.route } />
      </View>
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

class App extends Component {
  render () {
    return (
      <Provider store={ Store }>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false,
            }}>
              <Stack.Screen name="Visão Geral" component={Home}
                options={{
                  transitionSpec: {
                    open: config,
                    close: config
                  }
                }}
              />
              <Stack.Screen name="Escolha um exercício" component={ExerciseRegister}
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
              <Stack.Screen name="Meus Exercícios" component={ExerciseList}
                options={{
                  transitionSpec: {
                    open: config,
                    close: config
                  }
                }}
              />
              <Stack.Screen name="Exercício Completado" component={ExerciseCompleted}
                options={{
                  transitionSpec: {
                    open: config,
                    close: config
                  }
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
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
