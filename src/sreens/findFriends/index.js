import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { styles } from './styles';
import VectorIcon from '../../components/Vectoricon';
import { Ntext } from '../../components/Ntext';
import colors from '../../utils/colors';

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
  const [refreshing, setRefreshing] = useState(false);

  // Filter friends based on search query
  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onRefresh = () => {
    setRefreshing(true);
    // Simulated delay for network request
    setTimeout(() => setRefreshing(false), 2000);
  };


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.friendCard} onPress={() => { navigation.navigate('friendsProfile') }}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <View style={styles.textContainer}>
        <Ntext title={item.name} size={16} type='bold' color={colors.black} />
        <Ntext title={item.status} size={14} color={colors.Placeholdercolor} style={styles.friendStatus} />
      </View>
      <TouchableOpacity style={styles.actionButton}>
        <Ntext title='Message' type='bold' color={colors.white} size={14} />
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
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.black} />}
        ListEmptyComponent={<Ntext title='No friends found.' size={16} color='#888' style={styles.noFriendsText} />}
      />
    </View>
  );
}

export default FindFriendsScreen

