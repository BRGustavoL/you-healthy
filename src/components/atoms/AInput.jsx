import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class AInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      name: ''
    }
  }

  render() {    
    return (
      <TextInput 
        style={[ this.props.style, styles.mText, this.state.focus ? styles.textFocus : null ]}
        placeholder="Nome da atividade"
        onChangeText={(value) => this.setState({ name:value })}
        value={this.state.name}
        onFocus={()=>{this.setState({focus:true})}}
        onBlur={()=>{this.setState({focus:false})}}
      />
    )
  }
}

const styles = StyleSheet.create({
  mText:{
    width: '100%',
    backgroundColor: '#fff',
    padding: 5,
    height: 40,
    borderWidth: 1,
    borderStyle: 'none'
  },
  textFocus:{
    borderColor: '#5d05d5',
    borderBottomWidth: 10
  }
})
