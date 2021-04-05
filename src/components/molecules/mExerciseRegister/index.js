import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalVisibility } from '../../../redux/actions/index.js'

import SVGAgachamento from '../../../../assets/icons/agachamento.svg'
import SVGAlongamento from '../../../../assets/icons/alongamento.svg'
import SVGPolichinelo from '../../../../assets/icons/polichinelo.svg'
import SVGPilates from '../../../../assets/icons/pilates.svg'

import AButton from '../../atoms/aButton/index'
import ATitle from '../../atoms/aTitle/index'
import AModal from '../../atoms/aModal/index'
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
    case 'Agachamento':
      return ( <SVGAgachamento width="100" height="100" /> )
    case 'Alongamento':
      return ( <SVGAlongamento width="100" height="100" /> )
    case 'Polichinelo':
      return ( <SVGPolichinelo width="100" height="100" /> )
    case 'Pilates':
      return ( <SVGPilates width="100" height="100" /> )
  }
}

class MExerciseRegister extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedItem: null,
      data: [
        { id: '1', name: 'Agachamento', time: '(1 min)' },
        { id: '2', name: 'Alongamento', time: '(2 min)' },
        { id: '3', name: 'Polichinelo', time: '(3 min)' },
        { id: '4', name: 'Pilates', time: '(4 min)' }
      ]
    }
  }

  setExercise = (id) => {
    this.setState({ selectedItem: id })
  }

  render() {
    const columns = 2
    const { setModalVisibility } = this.props
    return (
      <View style={ styles.exerciseRegister }>
        <View style={ styles.mForm }>
          <ATitle
            style={ styles.mTitle }
            title="Escolha um exercício"
          />
          <AModal />
          <View style={ styles.mCardGrid }>
            <FlatList
              data={ createRows(this.state.data, columns) }
              keyExtractor={ item => item.id }
              numColumns={ columns }
              renderItem={({ item }) => {
                return (
                  <View style={ item.id === this.state.selectedId ? styles.mItemSelected : styles.mItem }>
                    <TouchableOpacity
                      style={ styles.mText }
                      onPress={ () => this.setExercise(item.id) }
                      onLongPress={ () => setModalVisibility(true) }
                    >
                      { returnSVG(item) }
                    </TouchableOpacity>
                    <Text style={ styles.mExeType }>{ item.name }</Text>
                    <Text style={ styles.mExeTime }>{ item.time }</Text>
                    <Text style={ styles.mExeTime }>{ this.state.selectedId }</Text>
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
const mapDispatchToProps = dispatch => bindActionCreators({ setModalVisibility }, dispatch)
const mapStateToProps = store => ({ isVisible: store.modalState.isVisible })

export default connect(mapStateToProps, mapDispatchToProps)(MExerciseRegister)
