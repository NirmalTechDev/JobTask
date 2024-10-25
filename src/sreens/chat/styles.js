import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.primary,
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    headerIcons: {
      flexDirection: 'row',
    },
    iconSpacing: {
      marginLeft: 15,
    },
    searchBar: {
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    searchPlaceholder: {
      color: '#888',
      fontSize: 16,
    },
    chatList: {
      flex: 1,
    },
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    chatDetails: {
      flex: 1,
    },
    chatMeta: {
      alignItems: 'flex-end',
    },
    unreadBadge: {
      backgroundColor: colors.ThemeBorder,
      borderRadius: 50,
      paddingHorizontal: 10,
      paddingVertical: 2,
      marginTop: 5,
    },
    fab: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 60,
      height: 60,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      elevation: 5,
      backgroundColor:colors.white,
    },
  });
  