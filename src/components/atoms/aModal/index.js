import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalVisibility } from '../../../redux/actions/index.js'

import SVGInfo from '../../../../assets/icons/info.svg'

import styles from './styles'

class AModal extends Component {
  render() {
    const { isVisible, setModalVisibility } = this.props
    return (
      <View style={ styles.centeredView }>
        <Modal
          animationType="slide"
          transparent={ true }
          visible={ isVisible }
          presentationStyle="overFullScreen"
        >
          <View style={ styles.centeredView }>
            <SVGInfo style={ styles.infoIcon } width="48" height="48" />
            <View style={ styles.modalView }>
              <Text style={ styles.title }>Pilates</Text>
              <Text style={ styles.description }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
              <Text style={ styles.time }>Duração: 4 minutos</Text>
              <TouchableOpacity
                style={ styles.closeButton }
                onPress={() => setModalVisibility(false) }>
                <Text style={ styles.textStyle }>Entendi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ setModalVisibility }, dispatch)
const mapStateToProps = store => ({ isVisible: store.modalState.isVisible })

export default connect(mapStateToProps, mapDispatchToProps)(AModal)
