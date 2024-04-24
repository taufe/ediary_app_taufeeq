const OnBoarding = ({navigation}) => {
  const ref = useRef();
  const {width} = useWindowDimensions();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const dots = [1, 2];
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const onPressNext = () => {
    if (currentSlideIndex <= 0) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      ref.current.scrollToIndex({animated: true, index: currentSlideIndex + 1});
      setActiveDotIndex(activeDotIndex + 1);
    } else {
      navigation.navigate(SCREEN.welcomeScreen);
    }
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    setActiveDotIndex(currentIndex);
  };
  return (
    <MainWrapper>
      <StatusBar translucent barStyle="light-content" />
      <FlatList
        ref={ref}
        style={{height: height(80)}}
        data={onBoardingData}
        horizontal
        pagingEnabled
        onMomentumScrollBegin={updateCurrentSlideIndex}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <OnBoardingComponent
              backgroundSource={item?.backgroundImage}
              mainImage={item?.mainImage}
              subImage={item?.subImage}
              title={item?.title}
              description={item?.description}
            />
          );
        }}
      />
      <Wrapper
        style={{
          height: height(20),
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <RowWrapperBasic>
          {dots.map((dot, i) => (
            <View
              style={[
                styles.dotStyle,
                {
                  backgroundColor:
                    activeDotIndex == i
                      ? colors.appBgColor3
                      : colors.appBgColor15,
                },
              ]}
            />
          ))}
        </RowWrapperBasic>
        <Spacer height={sizes.baseMargin} />
        <ButtonColored text="Next" onPress={onPressNext} />
        <Spacer height={sizes.doubleBaseMargin} />
      </Wrapper>
    </MainWrapper>
  );
};
