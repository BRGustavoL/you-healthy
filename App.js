import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import MExerciseRegister from './src/components/molecules/mExerciseRegister/index'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
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

function ExerciseRegister() {
  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <MExerciseRegister />
    </View>
  );
}
const Stack = createStackNavigator()

function App() {
  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto.ttf')
  })

  if (!loaded) return null

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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff'
  }
})

export default App
