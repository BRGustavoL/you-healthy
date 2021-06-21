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
  mCardGrid: {
    marginTop: 24,
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '100%'
  },
  choose: {
    color: '#3fbdf1',
    fontSize: 20,
    fontWeight: 'bold'
  },
  mTitle: {
    marginBottom: 30
  },
  mFormActionButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mItem: {
    alignItems: 'center',
    flexBasis: 0,
    flexGrow: 1,
    margin: 8,
    padding: 20,
    borderRadius: 20,
    borderColor: '#dbdbdb',
    borderWidth: 1,
    height: 200
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
    fontSize: 16,
    marginTop: 4,
    color: '#737373'
  },
  mExeTime: {
    fontSize: 12,
    color: '#737373'
  }
})

export default styles
