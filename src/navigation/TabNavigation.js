// import React from 'react';
// import Home from '../sreens/home';
// import ProfileScreen from '../sreens/profile';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import VibesScreen from '../sreens/vibes';
// import VectorIcon from '../components/Vectoricon';
// import FindFriendsScreen from '../sreens/findFriends';
// import ChatScreen from '../sreens/chat';
// import colors from '../utils/colors';
// const Tab = createBottomTabNavigator();

// const TabNavigation = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={'home'}
//       screenOptions={({ route }) => ({
//         // eslint-disable-next-line react/no-unstable-nested-components
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           let iconType;

//           if (route.name === 'home') {
//             iconName = 'home-outline';
//             iconType = 'Ionicons';
//           } else if (route.name === 'vibes') {
//             iconName = 'play-video';
//             iconType = 'Foundation';
//           } else if (route.name === 'findFriends') {
//             iconName = 'people-outline';
//             iconType = 'Ionicons';
//           } else if (route.name === 'chat') {
//             iconName = 'cat';
//             iconType = 'MaterialCommunityIcons';
//           } else if (route.name === 'Profile') {
//             iconName = 'person-outline';
//             iconType = 'Ionicons';
//           }
//           return <VectorIcon name={iconName} type={iconType} size={size} color={color} />
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: colors.ThemeBorder,
//         inactiveTintColor: 'gray',
//         style: { paddingBottom: 5, height: 60 },
//       }}
//     >
//       <Tab.Screen name="home" component={Home} options={{ headerShown: false }} />
//       <Tab.Screen name="findFriends" component={FindFriendsScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="vibes" component={VibesScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="chat" component={ChatScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigation;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../sreens/home';
import ProfileScreen from '../sreens/profile';
import VibesScreen from '../sreens/vibes';
import FindFriendsScreen from '../sreens/findFriends';
import ChatScreen from '../sreens/chat';
import VectorIcon from '../components/Vectoricon';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.customButtonContainer}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.customButton}>{children}</View>
  </TouchableOpacity>
);

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        let iconName;
        let iconType;

        // Define icons for each route
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
          iconName = 'chat-outline';
          iconType = 'MaterialCommunityIcons';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
          iconType = 'Ionicons';
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return route.name === 'vibes' ? (
          <CustomTabBarButton key={route.key} onPress={onPress}>
            <VectorIcon
              name={iconName}
              type={iconType}
              size={30}
              color={isFocused ? colors.ThemeBorder : 'white'}
            />
          </CustomTabBarButton>
        ) : (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            <VectorIcon
              name={iconName}
              type={iconType}
              size={25}
              color={isFocused ? colors.ThemeBorder : 'gray'}
            />
            {/* <Text style={[styles.tabLabel, { color: isFocused ? colors.ThemeBorder : 'gray' }]}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="findFriends" component={FindFriendsScreen} />
      <Tab.Screen name="vibes" component={VibesScreen} />
      <Tab.Screen name="chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 3,
  },
  customButtonContainer: {
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.5,
    // elevation: 10,
  },
  customButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: colors.ThemeBorder,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default TabNavigation;
