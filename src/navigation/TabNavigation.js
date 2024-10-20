import React from 'react';
import Home from '../sreens/home';
import ProfileScreen from '../sreens/profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VibesScreen from '../sreens/vibes';
import VectorIcon from '../components/Vectoricon';
import FindFriendsScreen from '../sreens/findFriends';
import ChatScreen from '../sreens/chat';
import colors from '../utils/colors';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconType;

          if (route.name === 'home') {
            iconName = 'home-outline';
            iconType = 'Ionicons';
          } else if (route.name === 'vibes') {
            iconName = 'play-video';
            iconType = 'Foundation';
          } else if (route.name === 'findFriends') {
            iconName = 'people-outline';
            iconType = 'Ionicons';
          } else if (route.name === 'chat') {
            iconName = 'cat';
            iconType = 'MaterialCommunityIcons';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
            iconType = 'Ionicons';
          }
          return <VectorIcon name={iconName} type={iconType} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.ThemeBorder,
        inactiveTintColor: 'gray',
        style: { paddingBottom: 5, height: 60 },
      }}
    >
      <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="findFriends" component={FindFriendsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="vibes" component={VibesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="chat" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
