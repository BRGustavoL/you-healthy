import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class AButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[ styles.button, this.props.style ]}>
        <Text style={styles.label}> { this.props.label } </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01AA4F',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 30
  },
  label: {
    color: '#FFF'
  }
})
