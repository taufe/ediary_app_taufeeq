import React from 'react';
import { style } from './style';
import { LargeTitle, MainWrapper, Wrapper } from '../../../components';
import { AppStatusBar } from '../../../components/commonComponents';
import { totalSize } from 'react-native-dimension';
import { colors } from '../../../constants';

const Splash = () => {
  return (
    <MainWrapper>
      <AppStatusBar bgColor={colors.appBgColor2} />
      <Wrapper style={style.wrapper}>
        <LargeTitle style={{
          fontWeight: 'bold',
          fontSize: totalSize(5)
        }}>Co. Medical</LargeTitle>
      </Wrapper>
    </MainWrapper>
  );
};

export default Splash;
