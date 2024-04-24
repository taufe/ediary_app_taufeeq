import { useEffect, useState, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import { SCREEN } from '../../../../constants';

const useOnboarding = (navigation, route) => {
  const onboardingListRef = useRef();

  // all local states
  const { width } = useWindowDimensions();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const onPressNext = () => {
    if (currentSlideIndex <= 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      onboardingListRef.current.scrollToIndex({
        animated: true,
        index: currentSlideIndex + 1,
      });
      setActiveDotIndex(activeDotIndex + 1);
    } else {
      navigation.navigate(SCREEN.signIn);
    }
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    setActiveDotIndex(currentIndex);
  };

  // useEffect(() => {}, []);
  return {
    onboardingListRef,
    currentSlideIndex,
    activeDotIndex,
    onPressNext,
    updateCurrentSlideIndex,
  };
};

export default useOnboarding;
