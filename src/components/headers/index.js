import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  LargeTitle,
  MediumText,
  RegularText,
  SmallTitle,
} from '../text';
import { AbsoluteWrapper, RowWrapper, RowWrapperBasic, Wrapper } from '../wrappers';
import { height, width, totalSize } from 'react-native-dimension';
import { colors, fontFamily } from '../../constants';
import { Icon } from 'react-native-elements';
import { Avatar } from '../images';
import { AppIcons } from '../../assets';
import { Spacer } from '../spacers';
import { BackButton } from '../buttons';
import LinearGradient from 'react-native-linear-gradient';
import { Custom } from '../icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
export const MainHeader = ({ title, title2, userProfile, showBackBtn, showSearchIcon, showHeartIcon, heartFill, onHeartPress, showAddIcon,
  showLogoutBtn, onLogoutPress, onPressShare, onPressReport, isThreeDots, onPressInfo, isIcon }) => {
  title = title ? title?.split('      ') : ['', ''];
  return (
    <Wrapper style={styles.main_view}>
      {showBackBtn ? (<BackButton />) : (
        <AbsoluteWrapper style={styles.mainHeaderLeftWrapper}>
          <RowWrapperBasic>
            {userProfile && <Avatar source={userProfile} size={totalSize(5)} />}
          </RowWrapperBasic>
        </AbsoluteWrapper>
      )}
      <RowWrapperBasic>
        {
          title[0] && <SmallTitle
            style={styles.authTitle}
            color={colors.appTextColor1}
            fontFamily={fontFamily.appTextSemiBold}>
            {title[0]}
          </SmallTitle>
        }
        {
          title[1] && <SmallTitle
            style={styles.authTitle}
            color={colors.appTextColor4}
            fontFamily={fontFamily.appTextSemiBold}>
            {' '} {title[1]}
          </SmallTitle>
        }
        {title2 && <SmallTitle
          style={styles.authTitle}
          color={colors.appTextColor3}
          fontFamily={fontFamily.appTextSemiBold}>
          {title2}
        </SmallTitle>}
      </RowWrapperBasic>
      <AbsoluteWrapper style={styles.mainHeaderRightWrapper}>
        <RowWrapperBasic>
          {showSearchIcon && (
            <TouchableOpacity>
              <Icon
                name="search"
                type="feather"
                size={totalSize(2)}
                color={colors.appIconColor8}
              />
            </TouchableOpacity>
          )}
          {showHeartIcon && (<TouchableOpacity onPress={onHeartPress}>
            <Icon
              name={heartFill ? 'heart' : "heart-o"}
              type="font-awesome"
              size={totalSize(2.4)}
              color={heartFill ? colors.appIconColor16 : colors.appIconColor9}
            />
          </TouchableOpacity>)}
          {showAddIcon && <LinearGradient colors={colors.gradiant5} style={styles.addBtn}>
            <TouchableOpacity>
              <Icon
                name='plus'
                type='antdesign'
                size={totalSize(2.4)}
                color={colors.appIconColor11}
              />
            </TouchableOpacity>
          </LinearGradient>}
          {showLogoutBtn && <TouchableOpacity onPress={onLogoutPress}>
            <RegularText>Logout</RegularText>
          </TouchableOpacity>}
          {isThreeDots && (
            <Menu>
              <MenuTrigger>
                <Wrapper style={styles.threeDots}>
                  <Icon
                    name="dots-three-vertical"
                    type="entypo"
                    size={totalSize(2)}
                    color={colors.appTextColor1}
                  />
                </Wrapper>
              </MenuTrigger>

              <MenuOptions>
                <MenuOption onSelect={onPressInfo} style={{ backgroundColor: colors.appBgColor4 }}>
                  <RowWrapper>
                    <Icon name="info" type="feather" size={totalSize(2)} color={colors.appTextColor2} />
                    <TouchableOpacity onPress={onPressInfo}>
                      <RegularText style={styles.dropDownText}>About Event</RegularText>
                    </TouchableOpacity>
                  </RowWrapper>
                </MenuOption>

                <MenuOption onSelect={onPressShare} style={{ backgroundColor: colors.appBgColor4 }}>
                  <RowWrapper>
                    <Icon name="sharealt" type="antdesign" size={totalSize(2)} color={colors.appTextColor2} />
                    <TouchableOpacity onPress={onPressShare}>
                      <RegularText style={styles.dropDownText}>Share Event</RegularText>
                    </TouchableOpacity>
                  </RowWrapper>
                </MenuOption>

                <MenuOption onSelect={onPressReport} style={{ backgroundColor: colors.appBgColor4 }}>
                  <RowWrapper>
                    <Icon name="flag" type="feather" size={totalSize(2)} color={colors.appTextColor2} />
                    <TouchableOpacity onPress={onPressReport}>
                      <RegularText style={styles.dropDownText}>Report Event</RegularText>
                    </TouchableOpacity>
                  </RowWrapper>
                </MenuOption>
              </MenuOptions>
            </Menu>
          )}

          {isIcon && (
            <Custom size={totalSize(3.2)} icon={AppIcons.locationVector} />
          )}
        </RowWrapperBasic>
      </AbsoluteWrapper>
    </Wrapper>
  );
};

// header for onboarding screens
export const OnboardingHeader = ({ onSkip, showSkip }) => {
  const skipButtonStyle = showSkip ? {} : { opacity: 0, width: 0, height: 20 };

  return (
    <RowWrapper style={styles.onboardingLogoWrapper}>
      <RowWrapperBasic>
      </RowWrapperBasic>
      <TouchableOpacity onPress={showSkip ? onSkip : null} style={skipButtonStyle}>
        <MediumText color={colors.appTextColor1}>Skip</MediumText>
      </TouchableOpacity>
    </RowWrapper>
  );
};

//header for auth screens  e.g login,signup
export const AuthHeader = ({ title, description, showBackBtn, onBackPress }) => {
  title = title ? title?.split(' ') : ['', ''];
  const navigation = useNavigation();
  return (
    <Wrapper style={styles.authWrapper}>
      {showBackBtn && (<Wrapper style={styles.authBackBtnContainer}>
        <TouchableOpacity onPress={() => onBackPress ? onBackPress : navigation.goBack()} style={styles.authBackBtn}>
          <Icon
            name="chevron-back"
            type="ionicon"
            size={totalSize(2)}
            color={colors.appIconColor4}
          />
        </TouchableOpacity>
      </Wrapper>)}
      <RowWrapperBasic>
        <SmallTitle
          style={styles.authTitle}
          color={colors.appTextColor3}
          fontFamily={fontFamily.appTextSemiBold}>
          {title[0]}
        </SmallTitle>
        <SmallTitle
          style={styles.authTitle}
          color={colors.appTextColor4}
          fontFamily={fontFamily.appTextSemiBold}>
          {' '}
          {title[1]}
        </SmallTitle>
      </RowWrapperBasic>
      <Spacer />
      {description && <RegularText>{description}</RegularText>}
    </Wrapper>
  );
};


export const AuthHeaderComponent = ({ heading, description }) => {
  return (
    <Wrapper>
      <LargeTitle style={styles.heading}>{heading}</LargeTitle>
      <Spacer isSmall />
      <RegularText style={styles.description}>{description}</RegularText>
    </Wrapper>
  )
}

export const styles = StyleSheet.create({
  title: {
    color: colors.appTextColor5,
    fontFamily: fontFamily.appTextMedium,
    fontSize: totalSize(2.1),
  },
  main_view: {
    alignItems: 'center',
    marginTop: height(1),
    marginBottom: height(3),
    justifyContent: 'center',
    minHeight: 30
  },
  pageName: {
    color: colors.appTextColor1,
    fontFamily: fontFamily.appTextMedium,
    fontSize: totalSize(2.1),
    alignSelf: 'center',
  },
  onboardingLogoWrapper: { marginVertical: height(1.5), },
  onboardingLogo: { width: width(12.23), height: height(5.47) },
  onboardingLogoText: {
    width: width(12.32),
    height: height(2.78),
    marginLeft: width(2),

  },
  authWrapper: {
    alignItems: 'center',
    marginTop: height(1),
    marginBottom: height(3),
  },
  authTitle: { fontSize: totalSize(2.4) },
  authBackBtnContainer: {
    left: width(5),
    position: 'absolute',
    top: 3
  },
  authBackBtn: {
    backgroundColor: colors.appBgColor10,
    height: totalSize(2.8), width: totalSize(2.8), borderRadius: totalSize(2.8) / 2,
    justifyContent: 'center', alignItems: 'center',

  },
  mainHeaderLeftWrapper: { position: 'absolute', left: 20 },
  mainHeaderRightWrapper: { position: 'absolute', right: 20 },

  addBtn: {
    width: totalSize(3.2),
    height: totalSize(3.2),
    borderRadius: totalSize(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width(3.5)
  },
  threeDots: {
    backgroundColor: colors.appBgColor11,
    height: totalSize(2.8),
    width: totalSize(2.8),
    borderRadius: totalSize(2.8) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width(3.5),
  },

  dropDownText: {
    fontSize: totalSize(1.2),
    color: colors.appTextColor2,

  },
  heading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(3.5),
    color: colors.appTextColor1,
    textAlign: 'center'

  },
  description: {
    fontSize: totalSize(1.4),
    color: colors.appTextColor5,
    textAlign: 'center',
    width: width(60),
    alignSelf: 'center'
  }

});
