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
  exerciseFlatList: {
    height: '90%',
    marginBottom: 4,
    overflow: 'hidden'
  },
  tagItem: {
    width: 10,
    height: '60%',
    borderRadius: 10,
    backgroundColor: '#3fbdf1',
    marginRight: 14
  },
  listItem: {
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 24,
    borderWidth: 0.1,
    borderRadius: 4,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  listExercise: {
    fontSize: 15,
    letterSpacing: 1.4,
    fontWeight: 'bold'
  },
  listDuration: {
    marginTop: 5,
    color: 'gray'
  },
  listFinishedAtContent: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    flex: 1,
  },
  listFinishedAtLabel: {
    marginBottom: 5,
    color: 'gray',
  },
  listFinishedAtValue: {
    color: 'gray',
  },
  textContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 34
  },
  tiredImage: {
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
  redirectButton: {
    width: '100%',
    color: '#3fbdf1',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  containerNoContent: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 64,
    paddingTop: 34
  },
  newExerciseButton: {
    display: 'flex',
    justifyContent: 'center',
    height: '10%',
  }
})

export default styles
