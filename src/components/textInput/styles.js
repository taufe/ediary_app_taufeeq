import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import { colors } from '../../constants';
export const styles = StyleSheet.create({
  textInputBorderedContainer: {
    height: height(6.43),
    borderColor: colors.appBorderColor8,
    paddingHorizontal: width(2),
    marginVertical: height(1),
  },
  textInputSearch: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: colors.bgColor1,
    borderRadius: 8,
    height: height(6.43),
    width: width(90.69),
  },
});
