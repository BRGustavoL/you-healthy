import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 64,
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
    // borderBottomColor: '#c7c7c7',
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
  }
})

export default styles
