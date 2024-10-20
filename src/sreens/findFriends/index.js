import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import VectorIcon from '../../components/Vectoricon';

// Sample friend data
const friends = [
  { id: '1', name: 'John Doe', status: 'Online', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: '2', name: 'Jane Smith', status: 'Last seen 2 hours ago', profilePic: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: '3', name: 'Alex Johnson', status: 'Offline', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
  // Add more friends here
];

const FindFriendsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  // Filter friends based on search query
  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.friendCard} onPress={()=>{navigation.navigate('friendsProfile') }}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <View style={styles.textContainer}>
        <Text style={styles.friendName}>{item.name}</Text>
        <Text style={styles.friendStatus}>{item.status}</Text>
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Message</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <VectorIcon name={'account-search-outline'} type={'MaterialCommunityIcons'} size={25} color='#888' style={styles.searchIcon} />
        <TextInput
          placeholder="Search friends..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={filteredFriends}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.noFriendsText}>No friends found.</Text>}
      />
    </View>
  );
}

export default FindFriendsScreen

