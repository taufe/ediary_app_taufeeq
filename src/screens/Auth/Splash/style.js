import { StyleSheet } from 'react-native';
import { width, height } from 'react-native-dimension';
import { colors } from '../../../constants';

export const style = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: height(44),
    left: width(18)

  },
  logo: {
    height: height(17.16),
    width: width(25.34),
  },
  cardGradient: {
    width: width(90.69),
    height: height(48.81),
    position: 'absolute',
    top: -width(60),
    left: -width(50),
  },
});
