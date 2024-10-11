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
  