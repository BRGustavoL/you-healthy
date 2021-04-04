import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  exerciseRegister: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 64
  },
  mForm: {},
  mButton: {},
  mLink: {},
  mTitle: {
    marginBottom: 30
  },
  mFormActionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mItem: {
    alignItems: 'center',
    flexBasis: 0,
    flexGrow: 1,
    margin: 8,
    padding: 20,
    borderRadius: 20,
    borderColor: '#dbdbdb',
    borderWidth: 1
  },
  mText: {
    height: 100,
    color: '#333333'
  }
})

export default styles
