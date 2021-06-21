import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  link: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3fbdf1',
  },
  labelButton: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.4
  },
  labelLink: {
    color: '#949494',
    fontSize: 18,
  },
  buttonDisabled: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ebebeb',
  },
  labelButtonDisabled: {
    color: '#bababa',
    fontSize: 24,
    letterSpacing: 1.4
  },
})

export default styles
