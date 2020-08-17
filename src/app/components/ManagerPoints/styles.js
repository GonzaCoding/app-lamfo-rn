import {StyleSheet} from 'react-native';
import {
  grey,
  white,
  grey_border,
  lamfo_blue,
  black,
} from '@constants/colors';

export default StyleSheet.create({
  managerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    maxWidth: 400,
    height: 60,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: white,
    borderColor: grey_border,
    borderWidth: 1,
  },
  managerImageRanking: {
    width: 68,
    height: 50,
    marginRight: 5,
  },
  managerPosition: {
    fontSize: 24,
    fontWeight: "bold",
    color: lamfo_blue,
    width: 30,
    textAlign: 'center',
  },
  managerImageAvatar: {
    width: 68,
    height: 50,
    marginRight: 5,
  },
  managerTextContainer: {
    flex: 1,
  },
  managerName: {
    color: black,
    fontSize: 17,
  },
  managerPoints: {
    color: black,
    fontSize: 17,
    fontWeight: "bold",
  },
  
});
