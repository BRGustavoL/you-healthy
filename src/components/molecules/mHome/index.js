import React, { Component } from 'react'
import { View } from 'react-native'
import ATitle from '../../atoms/aTitle/index'
import styles from './styles'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedItem: null,
      selectedId: false
    }
  }
  render() {
    return (
      <View style={ styles.home }>
        <ATitle
          style={ styles.mTitle }
          title="Visão Geral"
        />
      </View>
    )
  }
}
