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
    marginTop: 24,
    marginLeft: 8,
    marginRight: 8,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 16,
    borderColor: '#dbdbdb',
    borderWidth: 1,
    display: 'flex',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mItemSelected: {
    marginTop: 24,
    marginLeft: 8,
    marginRight: 8,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 16,
    borderWidth: 1,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: 'black',
  },
  mText: {
    height: 100,
    color: '#333333'
  },
  mExeType: {
    fontSize: 18,
    letterSpacing: 1.4,
    fontWeight: 'bold'
  },
  mExeTime: {
    marginTop: 5,
    color: 'gray'
  },
  radioInfo: {
    display: 'flex'
  }
})

export default styles
