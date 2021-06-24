import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  textContent: {
    height: '90%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 34
  },
  blueImage: {
    width: 320,
    height: 320,
    marginBottom: 40
  },
  text: {
    color: 'gray',
    fontSize: 20,
    paddingLeft: 11,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 28
  },
  actionButton: {
    display: 'flex',
    justifyContent: 'center',
  },
  redirectButton: {
    width: '100%',
    color: '#3fbdf1',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default styles
