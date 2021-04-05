import React, { Component } from 'react'
import { View, Text, Alert, Modal, TouchableHighlight } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setModalVisibility } from '../../../redux/actions/index.js'

import styles from './styles'

class AModal extends Component {
  render() {
    const { isVisible, setModalVisibility } = this.props
    return (
      <View style={ styles.centeredView }>
        <Modal
          animationType="fade"
          transparent={ true }
          visible={ isVisible }
          onRequestClose={() => Alert.alert('Modal has been closed.') }>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => setModalVisibility(false) }>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={ styles.openButton }
          onPress={() => setModalVisibility(true) }>
          <Text style={ styles.textStyle }>Show Modal</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ setModalVisibility }, dispatch)
const mapStateToProps = store => ({ isVisible: store.modalState.isVisible })

export default connect(mapStateToProps, mapDispatchToProps)(AModal)
