import { StyleSheet } from 'react-native';
import { height, width, totalSize } from 'react-native-dimension';
import { colors, fontFamily } from '../../constants';

export const style = StyleSheet.create({
  socialBtnTextStyle: {
    color: colors.appBgColor8,
    flex: 1,
    fontFamily: fontFamily.appTextMedium,
  },
  socialBtnContainerStyle: {
    paddingHorizontal: width(3.5),
    marginVertical: height(1),
    width: width(40),
    marginHorizontal: width(1.5),
  },
  tabContainer: {
    borderWidth: 1,
    borderColor: colors.appBorderColor9,
    borderRadius: totalSize(1.1),
    paddingHorizontal: width(5),
    paddingVertical: 5,
    marginRight: width(2),
    color: colors.appTextColor4,

  },
  eventMediumImage: { height: height(16.20), width: width(55.82), borderRadius: totalSize(2), borderWidth: 0.3, borderColor: colors.appBorderColor6 },
  eventMediumName: { fontSize: totalSize(1.8), lineHeight: totalSize(2.4), marginTop: 6, color: colors.appTextColor15, fontFamily: fontFamily.appTextSemiBold },
  eventMediumDate: { fontSize: totalSize(1.2), color: colors.appTextColor11 },
  eventMediumLocation: { fontSize: totalSize(1), marginHorizontal: 5, color: colors.appTextColor9 },

  eventSmallImage: { height: height(11.29), width: width(38.43), borderRadius: totalSize(1), borderWidth: 0.3, borderColor: colors.appBorderColor6 },
  eventSmallName: { fontSize: totalSize(1.25), lineHeight: totalSize(1.67), marginTop: 6, color: colors.appTextColor15 },
  eventSmallDate: { fontSize: totalSize(1), color: colors.appTextColor1 },
  eventSmallLocation: { fontSize: totalSize(0.8), marginHorizontal: 5, color: colors.appTextColor13 },

  eventLargeImageContainer: {
    width: width(90.69),
    height: height(27.68),
    borderRadius: width(5),
    flex: null,
    overflow: 'hidden',
    marginTop: height(2),
  },
  eventLargeName: { fontSize: totalSize(1.8), color: colors.appTextColor11 },
  eventLargeContentWrapper: {
    width: '100%', backgroundColor: colors.appBgColor10,
    bottom: 0, paddingVertical: '4%', paddingLeft: '3%', paddingRight: '2%', position: 'absolute',
  },
  eventTag: {
    borderRadius: totalSize(2),
    paddingHorizontal: totalSize(0.8),//1
    paddingVertical: totalSize(0.4), //0.6
    marginRight: width(2),
    position: 'absolute',
  },
  eventTagTitle: {
    marginLeft: 3,
    fontSize: totalSize(0.9),
    color: colors.appTextColor4
  },


  //
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.appBgColor10
  },
  modalContent: {
    backgroundColor: colors.appBgColor4,
    width: width(90.69),
    padding: totalSize(2),
    paddingVertical: totalSize(4),
    borderRadius: totalSize(1)
  },
  modalOption: {
    color: colors.appTextColor12,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalOptionText: { marginLeft: width(2), color: colors.appTextColor12 }
});
