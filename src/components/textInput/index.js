import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { ComponentWrapper, Wrapper, RowWrapperBasic } from '../wrappers';
import { InputTitle, MediumText, MediumTitle, RegularText, SmallText, TinyText } from '../text';
import { Spacer } from '../spacers';
import { height, width, totalSize } from 'react-native-dimension';
import { styles } from './styles';
import { colors, fontFamily, sizes } from '../../constants';
import { appStyles } from '../../utilities';
import { Icon, Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
export const TextInputBordered = ({
  autoFocus,
  iconName,
  error,
  onPressRight,
  iconType,
  required,
  left,
  onPress,
  content,
  keyboardType,
  title,
  isButton,
  titleStyle,
  placeholder,
  editable,
  animation,
  multiline,
  onFocus,
  buttonContentStyle,
  onBlur,
  onChangeText,
  rightStyle,
  secureTextEntry,
  value,
  iconColor,
  iconSize,
  containerStyle,
  inputContainerStyle,
  onPressIcon,
  inputStyle,
  right,
  iconStyle,
  buttonTextStyle,
  errorContainerStyle,
  gradientButton,
  onPressGradientButton,
  disabled,
  style,
  bgGradientColor,
  isLoading,
  buttonText,

}) => {
  var focused = false;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      {title ? (
        <View
          style={{
            position: 'absolute',
            top: -2,
            left: width(6),
            zIndex: 1,
            backgroundColor: colors.appBgColor4,
            paddingHorizontal: width(1.2)
          }}
        >
          <MediumTitle style={{ fontSize: totalSize(1.6), color: colors.appTextColor12 }}>{title}</MediumTitle>
        </View>
      ) : null}
      <Wrapper
        animation={animation}
        style={[
          styles.textInputBorderedContainer,
          {
            borderColor: error
              ? colors.appBorderColor9
              : colors.appBorderColor8,
            marginBottom: error ? 0 : height(1),
            position: 'relative',
          },
          containerStyle,
        ]}>
        <RowWrapperBasic
          style={[
            {
              borderRadius: sizes.inputRadius,
              borderWidth: 1,
              borderColor: colors.appTextColor9,
              height: height(6.43),
            },
            inputContainerStyle,
          ]}>
          {left ? left : null}
          <View style={{ flex: 8 }}>
            {isButton ? (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  onChangeText={onChangeText}
                  value={value}
                  placeholder={placeholder}
                  editable={editable}
                  keyboardType={keyboardType}
                  multiline={multiline}
                  placeholderTextColor={colors.appTextColor13}
                  secureTextEntry={secureTextEntry}
                  style={[appStyles.inputField, { flex: 1 }, inputStyle]}
                />
                {gradientButton ? (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                      paddingHorizontal: 15,
                      backgroundColor: 'transparent',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'transparent',
                    }}
                    onPress={onPressGradientButton}
                  >
                    <TouchableOpacity activeOpacity={0.7} onPress={onPress} disabled={disabled}>
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: totalSize(3) }}
                        colors={bgGradientColor ? bgGradientColor : disabled ? [colors.appBgColor6, colors.appBgColor6] : colors.gradiant5}>
                        {
                          isLoading ? <ActivityIndicator color={colors.appTextColor4} />
                            : <MediumText style={{ paddingHorizontal: width(6), paddingVertical: width(1), borderRadius: totalSize(1) }}>{buttonText}</MediumText>
                        }
                      </LinearGradient>
                    </TouchableOpacity>
                  </TouchableOpacity>
                ) : null}
              </View>
            ) : (
              content ? (
                content
              ) : (
                <TextInput
                  onChangeText={onChangeText}
                  value={value}
                  placeholder={placeholder}
                  editable={editable}
                  keyboardType={keyboardType}
                  multiline={multiline}
                  placeholderTextColor={colors.appTextColor8}
                  secureTextEntry={secureTextEntry}
                  style={[appStyles.inputField, {}, inputStyle]}
                />
              )
            )}
          </View>
          {right ? (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[{
                //height: height(4),
                paddingHorizontal: 12
              }, rightStyle]}
              onPress={onPressRight}>
              {right}
            </TouchableOpacity>
          ) : iconName ? (
            <View style={{ padding: 12, alignItems: 'center' }}>
              <Icon
                name={iconName}
                type={iconType}
                size={iconSize ? iconSize : sizes.icons.medium}
                color={iconColor ? iconColor : colors.appTextColor2}
                iconStyle={iconStyle}
                onPress={onPressIcon}
              />
            </View>
          ) : null}
        </RowWrapperBasic>
      </Wrapper>

      {error ? (
        <ComponentWrapper
          style={{ marginLeft: width(0), ...errorContainerStyle }}
          animation="shake">
          <Spacer height={sizes.TinyMargin} />
          <SmallText color={colors.appTextColor9}>{error}</SmallText>
        </ComponentWrapper>
      ) : null}

    </TouchableOpacity>

  );
};

export const TextInputSearch = ({
  autoFocus,
  right,
  left,
  editable,
  onPress,
  placeholder,
  onChangeText,
  value,
  onPressSearch,
  animation,
  containerStyle,
  filterIcon,
  onPressFilter,

}) => {
  return (
    <TextInputBordered
      autoFocus={autoFocus}
      onPress={onPress}
      editable={editable}
      containerStyle={[
        {
          borderWidth: 1,
          height: height(6.47),
          justifyContent: 'center',
          borderRadius: totalSize(1.6)
        },
        containerStyle,
      ]}
      inputContainerStyle={styles.textInputSearch}
      placeholderTextColor={colors.appTextColor10}
      placeholder={placeholder ? placeholder : 'Search message'}
      onChangeText={onChangeText}
      value={value}
      animation={animation}
      disabled
      rightStyle={{ height: null }}
      left={
        left ? (
          left
        ) : (
          <Icon
            name="search"
            type="feather"
            size={18}
            color={colors.appIconColor8}
            style={{ marginLeft: 10 }}
          />
        )
      }
      right={
        <TouchableOpacity
          onPress={onPressFilter}
        >
          <Icon
            name="options-outline"
            type="ionicon"
            size={22}
            color={colors.appIconColor8}
            style={{ marginRight: 10, }}
          />
        </TouchableOpacity>
      }
    />
  );
};
