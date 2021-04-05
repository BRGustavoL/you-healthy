import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#f7f7f7',
    padding: 48,
  },
  infoIcon: {
    marginLeft: 20,
    marginBottom: -24,
    zIndex: 1
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginBottom: 30
  },
  time: {
    marginBottom: 30
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F78E00',
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 30
  }
})

export default styles
