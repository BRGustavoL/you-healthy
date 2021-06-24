import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    height: '100%',
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 34,
  },
  innerContainer: {
    display: 'flex',
    height: '100%',
  },
  pageTitle: {
    marginBottom: 24
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
  },
  hoursTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 10,
    marginTop: 24
  },
  frequencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 24,
  },
  scheduleForm: {},
  dateContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateInput: {
    width: '85%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#e0e0e0',
    color: 'gray',
    fontSize: 18,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  dateButton: {
    backgroundColor: 'black',
    width: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
  },
  dateButtonText: {
    color: 'white',
    fontSize: 18,
  },



  option: {
    marginTop: 10,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 16,
    borderColor: '#dbdbdb',
    borderWidth: 1,
    display: 'flex',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  optionSelected: {
    marginTop: 10,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 16,
    borderWidth: 1,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'black',
  },
  radioOption: {
    fontSize: 18,
    letterSpacing: 1.4,
    fontWeight: 'bold'
  },
  radioInfo: {
    display: 'flex'
  },
  scheduleButton: {
    width: '100%',
    color: '#3fbdf1',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default styles
