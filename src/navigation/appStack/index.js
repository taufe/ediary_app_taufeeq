// Navigation.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { totalSize } from 'react-native-dimension';
import { RegularText } from '../../components';
import { SCREEN, tabs } from '../../constants';
import * as App from '../../screens/App';
import { SignIn } from '../../screens/Auth';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const TabData = [
    { id: '1', route: SCREEN.home, component: App.Home, iconName: 'home', label: 'Home' },
    { id: '2', route: SCREEN.mapFiltered, component: App.MapFiltered, iconName: 'credit-card', label: 'Map' },
    { id: '3', route: SCREEN.createEvents, component: App.CreateEvent, iconName: 'pluscircle', type: 'antdesign', label: 'Create Event' },
    { id: '4', route: SCREEN.myEvents, component: App.MyEvents, iconName: 'rate-review', type: 'materialicon', label: 'My Events' },
    { id: '5', route: SCREEN.profile, component: App.Profile, iconName: 'user', label: 'Profile' },
  ];

  return (
    <Tab.Navigator
      screenOptions={tabs.screenOptions}
      initialRouteName={SCREEN.home}>
      {TabData.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item?.route}
          component={item.component}
          options={({ route }) => ({
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name={item.iconName}
                type={item.type ? item.type : 'font-awesome'}
                color={color}
                size={item?.id == 3 ? totalSize(4.5) : totalSize(2.6)}
              />
            ),
            tabBarLabel: <RegularText style={{ color: 'red' }}>{item.label}</RegularText>,
            tabBarStyle: [{ ...tabs.screenOptions.tabBarStyle, }],
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={SCREEN.tabs}>
      <Screen name={SCREEN.tabs} component={MyTabs} />
      <Screen name={SCREEN.upcomingEvents} component={App.UpcomingEvents} />
      <Screen name={SCREEN.savedEvents} component={App.SavedEvents} />
      <Screen name={SCREEN.search} component={App.Search} />
      <Screen name={SCREEN.searchFilter} component={App.SearchFilter} />
      <Screen name={SCREEN.editProfile} component={App.EditProfile} />
      <Screen name={SCREEN.faq} component={App.Faq} />
      <Screen name={SCREEN.termsAndConditions} component={App.TermsAndConditions} />
      <Screen name={SCREEN.aboutEvent} component={App.AboutEvent} />
      <Screen name={SCREEN.inviteFriends} component={App.InviteFriends} />
      <Screen name={SCREEN.eventMap} component={App.EventMap} />
      <Screen name={SCREEN.eventPreview} component={App.EventPreview} />
      <Screen name={SCREEN.eventComment} component={App.EventComment} />
      <Screen name={SCREEN.eventDetails} component={App.EventDetails} />
      <Screen name={SCREEN.eventpost} component={App.EventPost} />
      <Screen name={SCREEN.Notifications} component={App.Notifications} />
      <Screen name={SCREEN.myprofile} component={App.MyProfile} />
      <Screen name={SCREEN.signIn} component={SignIn} />
    </Navigator>
  );
};

export default AppNavigation;
