import React from 'react';
import {
  MainWrapper,
  OnboardingHeader,
  Wrapper,
} from '../../../components';
import { AppStatusBar } from '../../../components/commonComponents';
import { OnboardingList, OnboardingSlider } from './components';
import { onBoardingData } from '../../../utilities/dummyData';
import useOnboarding from './hook';
import { SCREEN, colors } from '../../../constants';

const Onboarding = ({ navigation }) => {
  const {
    onboardingListRef,
    activeDotIndex,
    onPressNext,
    updateCurrentSlideIndex,
  } = useOnboarding(navigation);

  return (
    <MainWrapper>
      <AppStatusBar />
      <Wrapper style={{ backgroundColor: colors.appBgColor4 }}>
        <OnboardingHeader
          onSkip={() => navigation.navigate(SCREEN.signIn)}
          showSkip={activeDotIndex >= onBoardingData?.length - 1 ? false : true}
        />
      </Wrapper>
      <Wrapper style={{ flex: 1 }}>
        <OnboardingList
          onboardingListRef={onboardingListRef}
          data={onBoardingData}
          onPressNext={onPressNext}
          updateCurrentSlideIndex={updateCurrentSlideIndex}
          activeDotIndex={activeDotIndex}
        />
        <OnboardingSlider
          data={onBoardingData}
          activeDotIndex={activeDotIndex}
          onPressNext={onPressNext}
        />
      </Wrapper>
    </MainWrapper>
  );
};
export default Onboarding;
