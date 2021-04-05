import React, { Component } from 'react'
import { View, Text, Modal, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalVisibility } from '../../../redux/actions/index.js'

import SVGInfo from '../../../../assets/icons/info.svg'

import styles from './styles'

class AModal extends Component {
  render() {
    const { isVisible, info, setModalVisibility } = this.props
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
              <Text style={ styles.title }>{ info.title }</Text>
              <Text style={ styles.description }>{ info.description }</Text>
              <Text style={ styles.time }>Duração: { info.duration }</Text>
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
const mapStateToProps = store => ({
  isVisible: store.modalState.isVisible,
  info: store.modalState.info
})

export default connect(mapStateToProps, mapDispatchToProps)(AModal)
