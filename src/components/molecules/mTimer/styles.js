import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
  },
  mTimer: {
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 64,
    flex: 1,
    backgroundColor: '#F78E00'
  },
  mTimerOutFocus: {
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 64,
    flex: 1,
    backgroundColor: '#F78E00',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  insideCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '95%',
    height: '95%',
    borderRadius: 1000,
    padding: -100
  },
  remainingTime: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#787878'
  },
  secondsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#787878'
  },
  stopedTime: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#787878'
  },

  centeredView: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#f7f7f7',
    padding: 48,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowColor: '#000',
    shadowOffset: { width: 1000, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
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
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 64,
    color: '#787878'
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
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default styles
