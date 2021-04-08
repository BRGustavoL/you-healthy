import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalVisibility, setModalInfo, setTimer } from '../../../redux/actions/index.js'

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
      selectedItem: null,
      selectedId: false
    }
  }

  doRedirect = () => {
    this.props.navigation.navigate('Timer')
  }

  render() {
    const columns = 2
    const { setModalVisibility, setModalInfo, setTimer } = this.props

    setModal = (item) => {
      setModalVisibility(true)
      setModalInfo({
        title: item.title,
        description: item.description,
        duration: item.duration
      })
    }

    setExercise = (item) => {
      this.setState({ selectedId: item.id })
      setTimer({
        name: item.title,
        duration: item.duration
      })
    }

    const castDuration = (time) => {
      let result = time / 60
      return (result) > 1 ? `${result} minutos` : `${result} minuto`
    }

    const returnIsDisabled = (id) => {
      return id ? false : true
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
                  <View
                    style={ item.id === this.state.selectedId ? styles.mItemSelected : styles.mItem }>
                    <TouchableOpacity
                      style={ styles.mText }
                      onPress={ () => setExercise(item) }
                      onLongPress={ () => setModal(item) }
                    >
                      { returnSVG(item) }
                    </TouchableOpacity>
                    <Text style={ styles.mExeType }>{ item.title }</Text>
                    <Text style={ styles.mExeTime }>{ castDuration(item.duration) }</Text>
                  </View>
                )
              }}
            />
          </View>
        </View>
        <View style={ styles.mFormActionButtons }>
          <AButton
            style={ styles.mLink }
            text="Agora não"
            type="link"
          />
          <AButton
            style={ styles.mButton }
            text="Iniciar"
            backgroundColor="#F78E00"
            color="white"
            type="button"
            isDisabled={ returnIsDisabled(this.state.selectedId) }
            onPress={ () => this.doRedirect() }
          />
        </View>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ setModalVisibility, setModalInfo, setTimer }, dispatch)
const mapStateToProps = store => ({
  isVisible: store.modalState.isVisible,
  info: store.modalState.info,
  exercise: store.timerState.info
})

export default connect(mapStateToProps, mapDispatchToProps)(MExerciseRegister)
