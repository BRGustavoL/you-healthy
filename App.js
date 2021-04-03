import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AButton from './src/components/atoms/AButton'
import AInput from './src/components/atoms/AInput'

export default function App() {
  return (
    <View style={styles.container}>
      <AInput
        placeholder="Nome da atividade"
      />
      <AInput
        style={{ marginTop: 30 }}
        placeholder="Nome da atividade"
      />
      <AButton
        style={{ marginTop: 30 }}
        label="CADASTRAR"
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    backgroundColor: '#fff',
    marginRight: 30,
    marginLeft: 30
  }
})
