import React, { Component, useState } from 'react'
import { View, FlatList, TouchableOpacity, Modal, TouchableHighlight, Text, Alert } from 'react-native'

import SVGAgachamento from '../../../../assets/icons/agachamento.svg'
import SVGAlongamento from '../../../../assets/icons/alongamento.svg'
import SVGPolichinelo from '../../../../assets/icons/polichinelo.svg'
import SVGYoga from '../../../../assets/icons/yoga.svg'

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

returnSVG = (type) => {
  switch (type.name) {
    case 'agachamento':
      return ( <SVGAgachamento width="100" height="100" /> )
    case 'alongamento':
      return ( <SVGAlongamento width="100" height="100" /> )
    case 'polichinelo':
      return ( <SVGPolichinelo width="100" height="100" /> )
    case 'yoga':
      return ( <SVGYoga width="100" height="100" /> )
  }
}

const captalizeString = (str) => {
  return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
}

class MExerciseRegister extends Component {
  state = {
    data: [
      { id: "00", name: "agachamento" },
      { id: "01", name: "alongamento" },
      { id: "02", name: "polichinelo" },
      { id: "03", name: "yoga" }
    ]
  }
  render() {
    const columns = 2;
    return (
      <View style={ styles.exerciseRegister }>
        <View style={ styles.mForm }>
          <ATitle
            style={ styles.mTitle }
            title="Escolha um exercício"
          />
          <View style={ styles.mCardGrid }>
            <FlatList
              data={ createRows(this.state.data, columns) }
              keyExtractor={item => item.id}
              numColumns={columns}
              renderItem={({ item }) => {
                return (
                  <View style={styles.mItem}>
                    <TouchableOpacity
                      style={styles.mText}
                      onLongPress={ () => Alert.alert(`Atividade: ${captalizeString(item.name)}`) }
                    >
                      { returnSVG(item) }
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
