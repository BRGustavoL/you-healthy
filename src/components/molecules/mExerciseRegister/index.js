import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'

import AButton from '../../atoms/aButton/index'
// import AInput from '../../atoms/aInput/index'
import ATitle from '../../atoms/aTitle/index'
import styles from './styles'

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns)
  let lastRowElements = data.length - rows * columns

  while (lastRowElements !== columns) {
    lastRowElements += 1
  }

  return data
}

class MExerciseRegister extends Component {
  state = {
    data: [
      { id: "00", name: "Polichinelos" },
      { id: "01", name: "Yoga" },
      { id: "02", name: "Alongamento Comum" },
      { id: "03", name: "Corrida" }
    ]
  };
  render() {
    const columns = 2;

    return (
      <View style={ styles.exerciseRegister }>
        <View style={ styles.mForm }>
          <ATitle
            style={ styles.mTitle }
            title="Inicar exercício"
          />
          <View style={ styles.mCardGrid }>
            <FlatList
              data={ createRows(this.state.data, columns) }
              keyExtractor={item => item.id}
              numColumns={columns}
              renderItem={({ item }) => {
                return (
                  <View style={styles.mItem}>
                    <TouchableOpacity style={styles.mText}>
                      
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
        </View>
        <View style={ styles.mFormActionButtons }>
          <AButton
            style={ styles.mLink }
            type="link"
            label="Agora não"
          />
          <AButton
            style={ styles.mButton }
            type="button"
            label="Iniciar"
          />
        </View>
      </View>
    )
  }
}

export default MExerciseRegister
