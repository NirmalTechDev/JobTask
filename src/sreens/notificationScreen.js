import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 20,
    color: '#333',
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
});
