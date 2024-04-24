import { AppImages } from '../../../../assets';
import {
  CardWrapper,
  MediumTitle,
  PrimaryImage,
  RoundedWrapper,
  RowWrapper,
  RowWrapperBasic,
  Wrapper,
} from '../../../../components';
import { style } from '../style';
import RadialGradient from 'react-native-radial-gradient';
import LinearGradient from 'react-native-linear-gradient';
import { width, height, totalSize } from 'react-native-dimension';
import { colors } from '../../../../constants';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, FlatList } from 'react-native';

// component to show card ,image ,title and description of slide
export const OnboardingCard = ({ title, description, image }) => {
  return (
    <Wrapper style={{ width: width(100), alignItems: 'center' }}>
      <CardWrapper style={style.onboardingCard}>
        <PrimaryImage
          source={image ? image : AppImages.onboardingImage1}
          styles={style.onboardingImage}
        />
        {/* <RadialGradient
          style={style.cardGradient}
          colors={colors.gradiant4}
          stops={[0.01, 1]}
          center={[0.1, 0]}
          radius={400}></RadialGradient> */}
      </CardWrapper>
      <RadialGradient
        style={{
          height: height(100),
          width: width(100),
          position: 'absolute',
          // bottom: height(50),
        }}
        colors={colors.gradiant4}
        stops={[0.1, 0.7]}
        center={[270, 300]}
        radius={180}></RadialGradient>
      <MediumTitle style={style.description}>{description}</MediumTitle>
    </Wrapper>
  );
};

// button to move slides
export const SliderButton = ({ onPressNext }) => {
  return (
    <TouchableOpacity onPress={onPressNext}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors.gradiant6}
        style={style.sliderButton}>
        <Icon
          name="arrow-forward-ios"
          type="material-icon"
          size={totalSize(1.5)}
          color={colors.appIconColor4}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

// component to show active and un-active dots of slides
export const OnboardingDots = ({ data, activeDotIndex }) => {
  return (
    <RowWrapperBasic>
      {data &&
        data?.map((e, i) => (
          <RoundedWrapper
            key={i}
            style={[i == activeDotIndex ? style.activeDot : style.dot]}
          />
        ))}
    </RowWrapperBasic>
  );
};

// component to show dots(active/un-active) and button(to go to next slide) of slider
export const OnboardingSlider = ({ data, onPressNext, activeDotIndex }) => {
  return (
    <Wrapper>
      <Wrapper style={style.dotsPosition}>
        <OnboardingDots data={data} activeDotIndex={activeDotIndex} />
      </Wrapper>
      <RowWrapper style={style.bottomWrapper}>
        <SliderButton onPressNext={onPressNext} />
      </RowWrapper>
    </Wrapper>
  );
};

// component to show onboarding slides
export const OnboardingList = ({
  onboardingListRef,
  data,
  onPressNext,
  updateCurrentSlideIndex,
}) => {
  return (
    <FlatList
      ref={onboardingListRef}
      style={{
        flex: 1,
      }}
      data={data}
      horizontal
      pagingEnabled
      onMomentumScrollBegin={updateCurrentSlideIndex}
      onMomentumScrollEnd={updateCurrentSlideIndex}
      renderItem={({ item }) => (
        <OnboardingCard
          title={item?.title}
          description={item?.description}
          image={item?.image}
          onPressNext={onPressNext}
        />
      )}
    />
  );
};
