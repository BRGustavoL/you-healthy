import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalVisibility, setModalInfo, setTimer } from '../../../redux/actions/index.js'

import SVGAgachamento from '../../../../assets/icons/agachamento.svg'
import SVGAlongamento from '../../../../assets/icons/alongamento.svg'
import SVGPolichinelo from '../../../../assets/icons/polichinelo.svg'
import SVGPilates from '../../../../assets/icons/pilates.svg'

import ATitle from '../../atoms/aTitle/index'
import AButton from '../../atoms/aButton/index'
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
      selectedItem: '',
      selectedId: false
    }
  }

  render() {
    const columns = 1
    const { setModalVisibility, setModalInfo, setTimer } = this.props
    const setModal = (item) => {
      setModalVisibility(true)
      setModalInfo({
        title: item.title,
        description: item.description,
        duration: item.duration
      })
    }

    const setExercise = (item) => {
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
      <View style={ styles.container }>
        <View style={ styles.content }>
          <ATitle
            title="Escolha um exercício"
          />
          <View style={ styles.mCardGrid }>
            <FlatList
              data={ createRows(exerciseInfo, columns) }
              keyExtractor={ item => item.id }
              numColumns={ columns }
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={ item.id === this.state.selectedId ? styles.mItemSelected : styles.mItem }
                    onPress={ () => setExercise(item) }
                    onLongPress={ () => setModal(item) }
                  >
                    <View style={[{
                      height: 24,
                      width: 24,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: '#000',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 14
                    }, this.props.style]}>
                      {
                        item.id === this.state.selectedId ?
                          <View style={{
                            height: 24,
                            width: 24,
                            borderRadius: 12,
                            backgroundColor: '#000',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}/>
                          : null
                      }
                    </View>
                    <View style={ styles.radioInfo }>
                      <Text style={ styles.mExeType }>{ item.title }</Text>
                      <Text style={ styles.mExeTime }>Duração: { castDuration(item.duration) }</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <AModal />
        </View>
        <View style={ styles.mFormActionButtons }>
          <AButton
            label="Iniciar"
            isDisabled={ returnIsDisabled(this.state.selectedId) }
            onPress={ () => {
              this.setState({ selectedId: false })
              this.props.navigation.navigate('Temporizador')
            }}
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
