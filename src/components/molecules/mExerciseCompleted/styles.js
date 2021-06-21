import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  exerciseCompleted: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 64,
    paddingTop: 64
  },
  textContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 64
  },
  successImage: {
    width: 320,
    height: 200,
    marginBottom: 40
  },
  mTitle: {
    color: 'black',
    fontSize: 40,
    marginBottom: 40
  },
  text: {
    color: 'gray',
    fontSize: 20,
    paddingLeft: 11,
    fontWeight: '400',
    marginTop: 10,
    textAlign: 'center',
    letterSpacing: 1.4,
    lineHeight: 28
  },
  successButton: {
    width: '100%',
    color: '#3fbdf1',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default styles
