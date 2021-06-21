import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  exerciseRegister: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 34
  },
  mForm: {},
  choose: {
    color: '#3fbdf1',
    fontSize: 20,
    fontWeight: 'bold'
  },
  mButton: {},
  mLink: {},
  mTitle: {
    marginBottom: 30
  },
  mFormActionButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
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
  mItemSelected: {
    alignItems: 'center',
    flexBasis: 0,
    flexGrow: 1,
    margin: 8,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3fbdf1',
  },
  mText: {
    height: 100,
    color: '#333333'
  },
  mExeType: {
    marginTop: 4,
    color: '#737373'
  },
  mExeTime: {
    fontSize: 10,
    color: '#737373'
  }
})

export default styles
