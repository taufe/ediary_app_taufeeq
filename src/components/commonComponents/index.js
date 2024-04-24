import { StatusBar, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { colors, fontFamily } from '../../constants';
import { CardWrapper, ComponentWrapper, RowWrapper, RowWrapperBasic, Wrapper } from '../wrappers';
import { ButtonBorderd, HeartAbsoluteButton } from '../buttons';
import { Custom } from '../icons';
import { AppIcons } from '../../assets';
import { height, width, totalSize } from 'react-native-dimension';
import { appStrings } from '../../utilities/appStrings';
import { style } from './style';
import { MediumText, MediumTitle, RegularText, SmallText } from '../text';
import LinearGradient from 'react-native-linear-gradient';
import { PrimaryImage } from '../images';
import { Icon } from 'react-native-elements';
import { Spacer } from '../spacers';

import moment from 'moment';
import { TextInputBordered } from '../textInput';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Modal } from 'react-native';
import { Hrline } from '../lines';



// status that is used in this app 
export const AppStatusBar = ({ bgColor, barStyle }) => {
  return (
    <StatusBar
      backgroundColor={bgColor ? bgColor : colors.appBgColor4}
      barStyle={barStyle ? barStyle : 'light-content'}
    />
  );
};

export const AboutEventHeader = ({ title, description }) => {
  return (
    <Wrapper style={{ marginHorizontal: width(4.5) }}>
      <MediumTitle style={{ fontSize: totalSize(1.8), fontFamily: fontFamily.appTextMedium, color: colors.appBgColor2 }}>{title}</MediumTitle>
      <MediumTitle color={colors.appTextColor8} style={{ fontSize: totalSize(1.4), lineHeight: totalSize(2.4) }}>{description}</MediumTitle>
      <Spacer />
    </Wrapper>
  )
}
// google and apple logins buttons
export const SocialButtons = ({ onGooglePress, onApplePress }) => {
  return (
    <Wrapper style={{ flexDirection: 'row', marginHorizontal: width(3.2) }}>
      <ButtonBorderd
        bgColor={'transparent'}
        background={colors.appBgColor8}
        icon={<Custom icon={AppIcons.google} size={totalSize(3.5)} />}
        text={appStrings.googleBtnText}
        textStyle={style.socialBtnTextStyle}
        style={style.socialBtnContainerStyle}
        onPress={onGooglePress}
      />
      <ButtonBorderd
        bgColor={'transparent'}
        background={colors.appBgColor8}
        icon={<Custom icon={AppIcons.apple} size={totalSize(3.5)} />}
        text={appStrings.facebookBtnText}
        textStyle={style.socialBtnTextStyle}
        style={style.socialBtnContainerStyle}
        onPress={onApplePress}
      />
    </Wrapper>
  );
};

export const TabCard = ({ id, title, activeTab, onTabChange, tabStyle, inActiveBGColors, borderWidth }) => {
  return (
    <TouchableOpacity onPress={() => onTabChange(id)}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={activeTab == id ? colors.gradiant6 : inActiveBGColors ? inActiveBGColors : [colors.appBgColor4, colors.appBgColor4]} style={{ ...style.tabContainer, borderWidth: borderWidth || borderWidth == 0 ? borderWidth : activeTab == id ? 0 : 1, ...tabStyle }}>
        <RegularText style={{ color: activeTab === id ? colors.appTextColor4 : colors.appTextColor9 }}>{title}</RegularText>

      </LinearGradient>
    </TouchableOpacity>
  )
}

//
export const ComponentHeader = ({ title, rightText, onRightPress }) => {
  return (
    <RowWrapper style={{}}>
      <MediumText style={styles.heading}>{title}</MediumText>
      {rightText && <MediumText style={{ fontSize: totalSize(1.6) }} color={colors.appTextColor1} onPress={onRightPress} >{rightText}</MediumText>}
    </RowWrapper>
  )
}

const isSame = (date1, date2) => {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  if (year1 === year2 && month1 === month2 && day1 === day2) {
    return true;
  } else {
    return false;
  }
}
const isAfter = (date1, date2) => {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  if (year1 === year2 && month1 === month2 && day1 === day2) {
    return false
  } else if (date1 < date2) {
    return false
  } else {
    return true
  }
}
const isBefore = (date1, date2) => {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  if (year1 === year2 && month1 === month2 && day1 === day2) {
    return false
  } else if (date1 < date2) {
    return true
  } else {
    return false
  }
}

export const EventCardLarge = ({ id, index, image, name, date, startTime, endTime, userName, category, location, live, saved, onSaved }) => {
  return (
    <ImageBackground source={image} style={style.eventLargeImageContainer}>
      {
        isSame(new Date(date), new Date()) ?
          <EventAbsoluteTag title={'Live'} iconName={'radio'} iconType={'ionicon'} left={'none'} right={width(1.5)} bottom={height(22)} />
          : isAfter(new Date(date), new Date()) ? <EventAbsoluteTag title={'Upcoming'} left={width(63)} bottom={height(22)} />
            : <EventAbsoluteTag
              title={moment(new Date(date)).format('DD-MM-YYYY')} iconName={'calendar-check-outline'}
              left={'none'} right={width(1.5)} bottom={height(22)} />
      }
      <Wrapper style={style.eventLargeContentWrapper}>
        <RowWrapper style={{ marginHorizontal: 0, marginVertical: 0, }}>
          <MediumText style={style.eventLargeName}>{name}</MediumText>
          <RowWrapperBasic style={{}}>
            <Icon
              name='location-pin'
              type='simple-line-icon'
              color={colors.appIconColor4}
              size={totalSize(1.4)}
            />
            <RegularText style={style.eventMediumLocation}>{location}</RegularText>
          </RowWrapperBasic>
        </RowWrapper>
        <RowWrapper style={{ marginHorizontal: 0, marginVertical: 0, marginTop: 5 }}>
          <RegularText style={style.eventMediumDate} >{userName}   | <RegularText style={{ ...style.eventMediumDate, color: colors.appTextColor1 }} >  {category} </RegularText>  </RegularText>
          <RegularText style={style.eventMediumDate} >{moment(new Date(date)).format('hh:mm a')}  | {moment(new Date(date)).format('DD MMM YYYY')}</RegularText>
        </RowWrapper>
      </Wrapper>
      <Spacer />
    </ImageBackground>
  )
}

export const EventCardMedium = ({ id, index, image, name, date, location, live, saved, onSaved, OnpressEventDetails }) => {
  return (
    <TouchableOpacity onPress={OnpressEventDetails}>
      <CardWrapper style={{ marginRight: 13, marginVertical: 10, borderRadius: 15, shadowColor: 0 }}>
        <Wrapper>
          <PrimaryImage source={image} styles={style.eventMediumImage} />
          {/* {live && <EventAbsoluteTag isSmall title={'Live'} iconName={'radio'} iconType={'ionicon'} />} */}
        </Wrapper>
        <MediumText style={style.eventMediumName}>{name}</MediumText>
        <Spacer isTiny />
        <RegularText style={{ ...style.eventMediumDate, color: colors.appTextColor1 }} >{moment(new Date(date)).format('ddd, MMMM YY')}{'  -  '}{moment(new Date(date)).format('hh:mm')}{'  -  '}{moment(new Date(date)).format('hh:mm')} </RegularText>
        <RowWrapperBasic style={{ marginTop: 8 }}>
          <Icon
            name='location-pin'
            type='simple-line-icon'
            color={colors.appIconColor13}
            size={totalSize(1.4)}
          />
          <RegularText style={style.eventMediumLocation}>{location}</RegularText>
        </RowWrapperBasic>
        <HeartAbsoluteButton fill={saved} onHeartPress={() => onSaved(id, index)} />
      </CardWrapper>
    </TouchableOpacity>
  )
}

export const EventCardSmall = ({ id, index, image, name, date, location, saved, onSaved, onPressCard }) => {
  return (
    <TouchableOpacity onPress={onPressCard}>
      <CardWrapper style={{ marginTop: 10, marginHorizontal: width(2), shadowColor: 0 }}>
        <Wrapper>
          <PrimaryImage source={image} styles={style.eventSmallImage} />
          <EventAbsoluteTag isSmall title={'Upcoming'} />
        </Wrapper>
        <MediumText style={style.eventSmallName}>{name}</MediumText>
        <Spacer isTiny />
        <RegularText style={style.eventSmallDate} color={colors.appTextColor3}>{moment(new Date(date)).format('ddd, MMMM YY')}{'  -  '}{moment(new Date(date)).format('hh:mm')}{'  -  '}{moment(new Date(date)).format('hh:mm')} </RegularText>
        <RowWrapperBasic style={{ marginTop: 8 }}>
          <Icon
            name='location-pin'
            // type='ionicon'
            type='simple-line-icon'
            color={colors.appIconColor13}
            size={totalSize(1.4)}
          />
          <RegularText style={style.eventSmallLocation}>{location}</RegularText>
        </RowWrapperBasic>
        <HeartAbsoluteButton fill={saved} bottom={5} size={totalSize(2.7)} onHeartPress={() => onSaved(id, index)} />
      </CardWrapper>
    </TouchableOpacity>
  )
}

// event tag e.g live ,upcoming
export const EventAbsoluteTag = ({ isSmall, title, icon, iconSize, iconName, iconType, styles, textStyle, titleSize, top, left, right, bottom }) => {
  const defaultFontSize = isSmall ? totalSize(0.9) : totalSize(1.5);
  const defaultIconSize = isSmall ? totalSize(1) : totalSize(1.7);
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={colors.gradiant6}
      style={{
        ...style.eventTag,
        top: top ? top : null, left: left == 'none' ? 'none' : left ? left : 6, right: right ? right : null, bottom: bottom ? bottom : 8,
        ...styles
      }}
    >
      <RowWrapperBasic>
        {icon ? icon : <Icon
          name={iconName ? iconName : 'calendar-clock-outline'}
          type={iconType ? iconType : 'material-community'}
          size={iconSize ? iconSize : defaultIconSize}
          color={colors.appIconColor4}
        />}
        <RegularText style={{ ...style.eventTagTitle, fontSize: titleSize ? titleSize : defaultFontSize, ...textStyle }}>{title ? title : 'Upcoming'}</RegularText>
      </RowWrapperBasic>
    </LinearGradient>
  )
}


// date picker
export const DatePickerComponent = ({ title, date, setDate, isVisible, setIsVisible }) => {
  return (
    <Wrapper>
      <TextInputBordered title={title ? title : 'Date'} value={date ? moment(date).format('DD-MM-YYYY') : ''}
        isButton
        right={<Icon
          name="calendar-month-outline"
          type="material-community"
          color={colors.appIconColor5} size={totalSize(2.4)}
          onPress={() => setIsVisible(true)} />} />

      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={(date) => { setDate(date), setIsVisible(false) }}
        onCancel={() => setIsVisible(false)}
      />
    </Wrapper>
  )
}
//time picker
export const TimePickerComponent = ({ title, time, setTime, isVisible, setIsVisible }) => {
  return (
    <Wrapper>
      <TextInputBordered title={title ? title : 'Time'} value={time ? moment(time).format('LT') : ''}
        isButton
        right={<Icon
          name="clock-time-two-outline"
          type="material-community"
          color={colors.appIconColor5} size={totalSize(2.4)}
          onPress={() => setIsVisible(true)} />} />

      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={(dateTime) => { setTime(dateTime), setIsVisible(false) }}
        onCancel={() => setIsVisible(false)}
      />

    </Wrapper>
  )
}


export const CameraModal = ({ visible, setVisible, openCamera, openGallery, }) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Wrapper style={style.modalContainer}>
        <Wrapper style={style.modalContent}>

          <TouchableOpacity
            onPress={openGallery}
            style={style.modalOption}>
            <Icon name='image' type='feather' color={colors.appIconColor12} size={totalSize(1.4)} />
            <RegularText style={style.modalOptionText} >Choose from Gallery</RegularText>
          </TouchableOpacity>
          <Hrline Width={width(50)} />
          <TouchableOpacity
            onPress={openCamera}
            style={style.modalOption}>
            <Icon name='camera' type='feather' color={colors.appIconColor12} size={totalSize(1.4)} />
            <RegularText style={style.modalOptionText}>Take a Photo</RegularText>
          </TouchableOpacity>
          <Hrline Width={width(50)} />
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={style.modalOption}>
            <RegularText>Cancel</RegularText>
          </TouchableOpacity>
        </Wrapper>
      </Wrapper>
    </Modal>
  );
};


export const PostDetails = ({ profileImages, postImages, welfareCommunity, description, likeCount, commentCount, usageTime, onPresspost }) => {
  return (
    <TouchableOpacity onPress={onPresspost}>
      <ComponentWrapper >
        <RowWrapperBasic>
          <PrimaryImage size={totalSize(4)} source={profileImages} />
          <MediumTitle style={styles.welfareCommunity}>{welfareCommunity}</MediumTitle>
          <RegularText style={{ fontSize: totalSize(.9), color: colors.appTextColor12 }}>{'\u2B24'}</RegularText>
          <RegularText style={styles.time}>{usageTime}</RegularText>
          <Spacer isSmall />
        </RowWrapperBasic>
        <RegularText style={styles.description}>
          {description}
        </RegularText>
        {postImages && postImages !== "" && (
          <PrimaryImage styles={{ width: width(90), height: height(30) }} source={postImages} />
        )}
        <Spacer isSmall />

        <RowWrapperBasic>
          <Icon
            name={'heart'}
            type="font-awesome"
            size={totalSize(2.4)}
            color={colors.appIconColor16}
          />
          <RegularText style={styles.count}>{likeCount}</RegularText>
          <Custom size={totalSize(2.4)} icon={AppIcons.comment} />
          <RegularText style={styles.count}>{commentCount}</RegularText>
        </RowWrapperBasic>
        <Spacer />
      </ComponentWrapper>
    </TouchableOpacity>
  )
}

export const EventDetailsImagesComponent = ({ EventDetailsImages }) => {
  return (
    <Wrapper>
      <PrimaryImage styles={{ marginRight: width(3) }} size={totalSize(6.5)} source={EventDetailsImages} />
    </Wrapper>
  )
}


const styles = StyleSheet.create({

  description: {
    fontSize: totalSize(1.4),
    color: colors.appTextColor8,

  },
  time: {
    fontSize: totalSize(1.1),
    paddingLeft: width(2),
    // opacity: .5,
    color: colors.appBgColor12
  },
  count: {
    paddingLeft: width(2.5),
    paddingRight: width(3.5),
    color: colors.appTextColor2
  },
  heading: {
    color: '#2F2D2D',
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(2.2)
  },
  welfareCommunity: {
    fontSize: totalSize(1.4),
    marginHorizontal: width(2),
    color: colors.appTextColor15
  }

});
