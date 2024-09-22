import React from 'react'
import Home from '../sreens/home';
import FriendsScreen from '../sreens/friendsScreen';
import ProfileScreen from '../sreens/profileScreen';
import NotificationsScreen from '../sreens/notificationScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Friends') {
              iconName = 'people-outline';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = 'person-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3498db',
          inactiveTintColor: 'gray',
          style: { paddingBottom: 5, height: 60,},
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Tab.Screen name="Friends" component={FriendsScreen} options={{headerShown:false}} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{headerShown:false}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
      </Tab.Navigator>
  )
}

export default TabNavigation