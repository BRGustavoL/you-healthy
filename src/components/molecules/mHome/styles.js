import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 34
  },
  exercisesCard: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    elevation: 3,
    backgroundColor: 'white'
  },
  exercisesCardTop: {
    width: '100%',
    height: '75%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  exercisesCardBottom: {
    width: '100%',
    height: '25%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'center',
    borderTopWidth: 0.2,
    borderTopColor: 'gray'
  },
  exercisesCardBottomText: {
    letterSpacing: 1.4,
    fontSize: 18,
  },
  yogaImage: {
    width: 200,
    height: 190,
    marginBottom: 40
  },
  total: {
    fontSize: 50,
  },
  subTotal: {
    fontSize: 20,
    color: 'gray'
  },
  underTotal: {
    fontSize: 14,
    opacity: 0.5,
    color: 'gray'
  }
})

export default styles
