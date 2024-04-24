import { height, totalSize } from 'react-native-dimension';
import { colors } from '../colors';

export const SCREEN = {
  // stacks
  authStack: 'authStack',
  appStack: 'appStack',
  tabs: 'tabs',

  // AuthNavigation
  splash: 'splash',
  onboarding: 'onboarding',
  signIn: 'signIn',
  signUp: 'signUp',
  verifyEmail: 'verifyEmail',
  interests: 'interests',
  codeVerifying: 'codeVerifying',
  uploadProfile: 'uploadProfile',
  addFriends: 'addFriends',

  // AppNavigation
  home: 'home',
  mapFiltered: 'mapFiltered',
  createEvents: 'createEvents',
  myEvents: 'myEvents',
  profile: 'profile',
  upcomingEvents: 'upcomingEvents',
  savedEvents: 'savedEvents',
  search: 'search',
  searchFilter: 'searchFilter',
  editProfile: 'editProfile',
  faq: 'faq',
  termsAndConditions: 'termsAndConditions',
  aboutEvent: 'aboutEvent',
  eventMap: 'eventMap',
  inviteFriends: 'inviteFriends',
  eventPreview: 'eventPreview',
  eventDetails: 'eventDetails',
  eventComment: 'eventComment',
  eventpost: 'eventpost',
  Notifications: 'Notifications',
  myprofile: 'myprofile',
};

export const tabs = {
  screenOptions: {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      backgroundColor: colors.appBgColor4,
      height: height(7.72),
      borderRadius: totalSize(1.6),
      borderTopWidth: 0,
      borderRadius: 0
    },

  },
};
