import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 34,
  },
  mTitle: {
    color: '#3fbdf1',
    textAlign: 'center',
    fontSize: 40,
    letterSpacing: 1.4
  },
  countdown: {
    display: 'flex',
    justifyContent: 'center',
    height: '90%'
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%',
  },
  backButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
