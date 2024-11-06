import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { Ntext } from '../../components/Ntext';
import colors from '../../utils/colors';

// Sample notification data
const notifications = [
  {
    id: '1',
    title: 'New Friend Request',
    description: 'John Doe sent you a friend request.',
    time: '5 mins ago',
    icon: 'person-add-outline',
  },
  {
    id: '2',
    title: 'Message Received',
    description: 'You received a new message from Jane.',
    time: '10 mins ago',
    icon: 'chatbox-outline',
  },
  {
    id: '3',
    title: 'Location Shared',
    description: 'Alex shared their location with you.',
    time: '30 mins ago',
    icon: 'location-outline',
  },
  // Add more notifications here
];

export default function NotificationScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationCard}>
      <Icon name={item.icon} size={30} color="#3498db" style={styles.icon} />
      <View style={styles.textContainer}>
        <Ntext title={item.title} size={16} type='bold' color={colors.black}/>
        <Ntext title={item.description} size={14} color={colors.Placeholdercolor} style={styles.description} />
      </View>
      <Ntext title={item.time} size={12} color='#999' />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Ntext title='Notification' size={24} type='bold' color={colors.black} style={styles.header} />
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

