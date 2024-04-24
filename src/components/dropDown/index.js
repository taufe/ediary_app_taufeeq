import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Wrapper } from "../wrappers";
import DropDownPicker from "react-native-dropdown-picker";
import { colors, fontFamily } from "../../constants";
import { totalSize, height, width } from "react-native-dimension";
import { MediumTitle } from "../text";
import { Icon } from "react-native-elements";

const PrimaryDropDown = ({
  title,
  value,
  setValue,
  items,
  placeholder,
  style,
  zIndex,
  iconColor,
  iconSize
}) => {

  const [open, setOpen] = useState(false);

  return (
    <Wrapper style={[{ zIndex: zIndex ? zIndex : 0, marginHorizontal: width(2) }, style]}>
      {title ? (
        <View
          style={{
            // position: 'absolute',
            // top: -5,
            // left: width(4),
            // backgroundColor: colors.appBgColor4,
            paddingHorizontal: width(1.2)
          }}
        >
          <MediumTitle style={{ fontSize: totalSize(1.6), color: colors.appTextColor12 }}>{title}</MediumTitle>
        </View>
      ) : null}
      <DropDownPicker
        placeholder={placeholder ? placeholder : "Select an option"}
        placeholderStyle={{
          color: colors.appTextColor8, fontFamily: fontFamily.appTextRegular,
          fontSize: totalSize(1.6),
        }}
        showTickIcon={true}
        style={[styles.dropDown, { borderRadius: open ? totalSize(1) : totalSize(1.1) }]}
        open={open}
        setOpen={() => setOpen((val) => !val)}
        value={value}
        setValue={(val) => setValue(val)}
        items={items}
        listMode="FLATLIST"
        dropDownContainerStyle={[styles.dropDownContainer,]}
        textStyle={styles.text}
        ArrowUpIconComponent={() => <Icon name="chevron-up-outline" type="ionicon" color={iconColor ? iconColor : colors.appIconColor11} size={iconSize ? iconSize : totalSize(2.4)} />}
        ArrowDownIconComponent={() => <Icon name="chevron-down-outline" type="ionicon" color={iconColor ? iconColor : colors.appIconColor11} size={iconSize ? iconSize : totalSize(2.4)} />}
        TickIconComponent={() => <Icon name="check" type="antdesign" color={iconColor ? iconColor : colors.appIconColor11} size={iconSize ? iconSize : totalSize(2.4)} />}

      />
    </Wrapper>
  );
};

export default PrimaryDropDown;

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: totalSize(1.3),
    fontWeight: "bold",
    paddingLeft: 4,
  },
  dropDown: {
    borderWidth: 1,
    height: height(6),
    borderColor: colors.appBorderColor9,
    marginVertical: height(1),
    backgroundColor: colors.appBgColor4,
  },
  dropDownContainer: {
    borderWidth: 1,
    borderRadius: totalSize(1),
    borderColor: colors.appBorderColor9,
    backgroundColor: colors.appBgColor4,
  },
  text: {
    fontSize: totalSize(1.6),
    color: colors.appTextColor7,
    fontFamily: fontFamily.appTextMedium,
  },
});
