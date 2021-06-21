import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
export default class Home extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View style={ styles.home }>
        <View style={ styles.exercisesCard }>
          <View style={ styles.exercisesCardTop }>
            <View>
              <Text style={ styles.subTotal }>
                Total:
              </Text>
              <Text style={ styles.total }>
                100
              </Text>
              <Text style={ styles.underTotal }>
                *Desde 20/06
              </Text>
            </View>
            <Image
              style={ styles.yogaImage }
              source={ require('../../../../assets/icons/yoga.png') }
            />
          </View>
          <View style={ styles.exercisesCardBottom }>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('Meus Exercícios') }>
              <Text style={ styles.exercisesCardBottomText }>
                Ver meus exercícios
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
