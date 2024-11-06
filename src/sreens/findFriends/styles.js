import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    searchBarContainer: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      marginHorizontal: 20,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      alignItems: 'center',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: '#333',
    },
    friendCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginHorizontal: 20,
      marginBottom: 10,
      padding: 15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    textContainer: {
      flex: 1,
    },
    friendStatus: {
      marginTop: 3,
    },
    actionButton: {
      backgroundColor: '#3498db',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    noFriendsText: {
      textAlign: 'center',
      marginTop: 20,
    },
  });