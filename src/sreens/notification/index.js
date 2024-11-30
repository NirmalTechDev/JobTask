import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { Ntext } from '../../components/Ntext';
import colors from '../../utils/colors';
import VectorIcon from '../../components/Vectoricon';
import { useNavigation } from '@react-navigation/native';

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
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const GoBack = () => {
    navigation.goBack();
  }

  const onRefresh = () => {
    setRefreshing(true);
    // Simulated delay for network request
    setTimeout(() => setRefreshing(false), 2000);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationCard}>
      <Icon name={item.icon} size={30} color="#3498db" style={styles.icon} />
      <View style={styles.textContainer}>
        <Ntext title={item.title} size={16} type='bold' color={colors.black} />
        <Ntext title={item.description} size={14} color={colors.Placeholdercolor} style={styles.description} />
      </View>
      <Ntext title={item.time} size={12} color='#999' />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => { GoBack() }}>
          <VectorIcon type={'MaterialIcons'} name={'chevron-left'} size={26} />
          <Ntext title='Notification' size={18} type='bold' color={colors.black} style={styles.headerTxt} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.black} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

