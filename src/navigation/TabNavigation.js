import React from 'react';
import Home from '../sreens/home';
import FriendsScreen from '../sreens/friendsScreen';
import ProfileScreen from '../sreens/profile';
import NotificationsScreen from '../sreens/notification';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VibesScreen from '../sreens/vibes';
import VectorIcon from '../components/Vectoricon';
import SettingScreen from '../sreens/profile/settings';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Profile'}
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconType;

          if (route.name === 'Home') {
            iconName = 'home-outline';
            iconType = 'Ionicons';
          } else if (route.name === 'vibes') {
            iconName = 'play-video';
            iconType = 'Foundation';
          } else if (route.name === 'Friends') {
            iconName = 'people-outline';
            iconType = 'Ionicons';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-outline';
            iconType = 'Ionicons';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
            iconType = 'Ionicons';
          }
          return <VectorIcon name={iconName} type={iconType} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3498db',
        inactiveTintColor: 'gray',
        style: { paddingBottom: 5, height: 60 },
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="vibes" component={VibesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
