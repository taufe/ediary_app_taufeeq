import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { colors } from '../../../constants';

export const style = StyleSheet.create({
  onboardingCard: {
    backgroundColor: colors.appBgColor4,
    width: width(90.69),
    height: height(48.81),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingHorizontal: 0,
    overflow: 'hidden',
    marginTop: height(1.5),
    marginBottom: height(5),
    zIndex: 999,
    elevation: 0,
  },
  onboardingImage: {
    width: width(64.01),
    height: height(40.53),
  },
  cardGradient: {
    width: width(90.69),
    height: height(48.81),
    position: 'absolute',
    top: -width(60),
    left: -width(50),
  },
  cardGradient2: {
    width: height(20),
    height: height(20),
    position: 'absolute',
    right: 0,
    bottom: height(30),
    borderRadius: 20,
    zIndex: 0,
  },
  description: {
    fontSize: totalSize(3.8),
    marginTop: 10,
    flex: 1,
    width: width(90),
    color: colors.appTextColor1
  },
  sliderButton: {
    height: totalSize(7.4),
    width: totalSize(7.4),
    borderRadius: totalSize(7.4) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: colors.appBgColor1,
    borderRadius: height(0.98) + width(2.13) / 2,
    height: height(0.98),
    width: width(2.13),
    marginHorizontal: width(0.5),
    opacity: .09
  },
  activeDot: {
    backgroundColor: colors.appBgColor1,
    borderRadius: height(0.98),
    height: height(0.98),
    width: width(5.07),
    marginHorizontal: width(0.5),
  },
  bottomWrapper: {
    position: 'absolute',
    left: width(35),
    right: 0,
    bottom: height(5.5),
  },
  dotsPosition: {
    position: 'absolute',
    left: width(40),
    right: 0,
    bottom: height(41),
  }
});
