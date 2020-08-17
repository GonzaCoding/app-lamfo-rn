import {StyleSheet} from 'react-native';
import {grey, white, grey_border, lamfo_blue, black} from '@constants/colors';

export default StyleSheet.create({
  tableTitle: {
    borderBottomWidth: 1,
    borderColor: black,
    backgroundColor: grey,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  table: {
    marginTop: 40,
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
  teamName: {
    flex: 5,
    justifyContent: 'center',
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  value: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
