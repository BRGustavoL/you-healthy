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
  }
})

export default styles
