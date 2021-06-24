import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loaderText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray'
  },

  home: {
    display: 'flex',
    height: '100%',
    paddingBottom: 64,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 34,
  },
  exercisesCard: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 24
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
    fontSize: 16,
  },
  yogaImage: {
    width: 200,
    height: 190,
    marginBottom: 40
  },
  total: {
    fontSize: 60,
  },
  subTotal: {
    fontSize: 20,
    color: 'gray',
    letterSpacing: 1.4,
  },
  smallText: {
    fontSize: 24,
    color: 'gray'
  },

  // Grupo de cards totalizadores duas colunas
  minutesTotal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    color: 'gray',
  },
  value: {
    fontSize: 30,
  },

  // Card totalizador de minutos esquerdo
  left: {
    width: '47%',
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    elevation: 3,
    backgroundColor: 'white',
    padding: 14,
    alignItems: 'center',
  },
  leftTag: {
    width: 8,
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#3fbdf1',
    marginRight: 10,
  },

  // Card totalizador de minutos direito
  right: {
    width: '47%',
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    elevation: 3,
    backgroundColor: 'white',
    padding: 14,
    alignItems: 'center',
  },
  rightTag: {
    width: 8,
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#ff9e64',
    marginRight: 10,
  },

  // Calendar Card
  calendarCard: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  calendarCardContent: {
    width: '100%',
    height: '75%',
    display: 'flex',
    flexDirection: 'row',
  },
  calendarCardButton: {
    width: '100%',
    height: '25%',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
    display: 'flex',
    justifyContent: 'center',
    borderTopWidth: 0.2,
    borderTopColor: 'gray',
    zIndex: -1
  },
  calendarInfo: {
    width: '50%',
    padding: 20,
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  calendarTitle: {
    letterSpacing: 1.4,
    fontSize: 20,
    color: 'gray'
  },
  calendarImage: {
    width: '50%',
    height: 200,
  },
  calendarCardBottomText: {
    letterSpacing: 1.4,
    fontSize: 16,
  },
  
  calendarPeriodContent: {
    display: 'flex',
    flexDirection: 'row'
  },
  calendarTag: {
    width: 8,
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#F06D7C',
    marginRight: 10,
  }
})

export default styles
