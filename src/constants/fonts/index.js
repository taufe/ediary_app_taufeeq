import {totalSize} from 'react-native-dimension';

const fontFamily = {
  // appTextLight: 'Poppins-Light', // 300
  // appTextRegular: 'Poppins-Regular', // 400
  // appTextMedium: 'Poppins-Medium', // 500
  // appTextSemiBold: 'Poppins-SemiBold', // 600
  // appTextBold: 'Poppins-Bold', // 700

  appTextLight: 'Lato-Light',
  appTextRegular: 'Lato-Regular',
  appTextMedium: 'Lato-Medium',
  appTextSemiBold: 'Lato-SemiBold', // semibold
  appTextBold: 'Lato-Bold',
};

const fontSize = {
  h1: totalSize(4.5),
  h2: totalSize(4),
  h3: totalSize(3.5),
  h4: totalSize(3),
  h5: totalSize(2.5),
  h6: totalSize(2),
  input: totalSize(1.75),
  large: totalSize(2),
  medium: totalSize(1.75),
  regular: totalSize(1.5),
  small: totalSize(1.25),
  tiny: totalSize(1),
};
export {fontSize, fontFamily};
