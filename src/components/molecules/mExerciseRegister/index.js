import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalVisibility, setModalInfo } from '../../../redux/actions/index.js'

import SVGAgachamento from '../../../../assets/icons/agachamento.svg'
import SVGAlongamento from '../../../../assets/icons/alongamento.svg'
import SVGPolichinelo from '../../../../assets/icons/polichinelo.svg'
import SVGPilates from '../../../../assets/icons/pilates.svg'

import AButton from '../../atoms/aButton/index'
import ATitle from '../../atoms/aTitle/index'
import AModal from '../../atoms/aModal/index'
import styles from './styles'

import { exerciseInfo } from '../../../helpers/mock.js'

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns)
  let lastRowElements = data.length - rows * columns

  while (lastRowElements !== columns) {
    lastRowElements += 1
  }

  return data
}

returnSVG = (type) => {
  switch (type.title) {
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
      selectedItem: null
    }
  }

  doRedirect = () => {
    this.props.navigation.navigate('Timer')
  }

  render() {
    const columns = 2
    const { setModalVisibility, setModalInfo } = this.props

    setModal = (item) => {
      setModalVisibility(true)
      setModalInfo({
        title: item.title,
        description: item.description,
        duration: item.duration
      })
    }

    setExercise = (id) => {
      this.setState({ selectedItem: id })
    }

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
              data={ createRows(exerciseInfo, columns) }
              keyExtractor={ item => item.id }
              numColumns={ columns }
              renderItem={({ item }) => {
                return (
                  <View style={ item.id === this.state.selectedId ? styles.mItemSelected : styles.mItem }>
                    <TouchableOpacity
                      style={ styles.mText }
                      onPress={ () => setExercise(item.id) }
                      onLongPress={ () => setModal(item) }
                    >
                      { returnSVG(item) }
                    </TouchableOpacity>
                    <Text style={ styles.mExeType }>{ item.title }</Text>
                    <Text style={ styles.mExeTime }>{ item.duration }</Text>
                    <Text style={ styles.mExeTime }>{ this.state.selectedId }</Text>
                  </View>
                )
              }}
            />
          </View>
        </View>
        <View style={ styles.mFormActionButtons }>
          {/* <AButton
            style={ styles.mLink }
            label="Agora não"
          /> */}
          <AButton
            style={ styles.mButton }
            text="Iniciar"
            onPress={ () => this.doRedirect() }
          />
        </View>
      </View>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ setModalVisibility, setModalInfo }, dispatch)
const mapStateToProps = store => ({
  isVisible: store.modalState.isVisible,
  info: store.modalState.info
})

export default connect(mapStateToProps, mapDispatchToProps)(MExerciseRegister)
