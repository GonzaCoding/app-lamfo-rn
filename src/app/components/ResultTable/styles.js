import {StyleSheet} from 'react-native';
import {
  grey,
  white,
  grey_border,
  lamfo_blue,
  black,
} from '@constants/colors';

export default StyleSheet.create({
  tableTitle: {
    borderBottomWidth: 1,
    borderColor: black,
    backgroundColor: grey,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  table: {
    width: '100%',
    borderColor: black,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  tableRow: {
    flexDirection: 'row',
    width: '100%',
    //alignItems: 'center',
    height: 30,
    borderColor: black,
    borderBottomWidth: 1,
  },
  shield: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shieldImage: {
    width: 20,
    height: 20,
  },
  teamName: {
    flex: 5,
    justifyContent: 'center',
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  goals: {
    borderColor: black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black,
  },
  goalsText: {
    color: white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  borderLeft:{
    borderLeftWidth: 1,
  },
  borderRight:{
    borderRightWidth: 1,
  },

});
