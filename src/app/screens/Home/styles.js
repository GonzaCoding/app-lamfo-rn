import {StyleSheet} from 'react-native';
import {
  grey,
  white,
  grey_border,
  lamfo_blue,
  black,
} from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    //justifyContent: 'space-around',
    alignContent: 'center',
  },
  containerRow: {
    flexDirection: 'row',
  },
  logo: {
    width: 300,
    height: 300,
  },
  block: {
    padding: 20,
    width: '100%',
    minHeight: 200,
    maxWidth: 350,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
