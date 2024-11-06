import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFEFEF',
    },
    header: {
      height: 60,
      flexDirection: 'row',
      paddingHorizontal: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    contactAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginLeft: 10,
    },
    contactName: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
      marginLeft: 10,
    },
    headerRight: {
      flexDirection: 'row',
    },
    iconButton: {
      marginLeft: 15,
      alignSelf:"center",
    },
    messagesList: {
      padding: 10,
      paddingBottom: 60, // To ensure the last message is visible above the input
    },
    messageContainer: {
      marginVertical: 5,
      flexDirection: 'row',
      alignItems: 'flex-end',
      maxWidth: '80%',
    },
    messageLeft: {
      justifyContent: 'flex-start',
    },
    messageRight: {
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
    },
    messageBubble: {
      padding: 10,
      borderRadius: 20,
      elevation: 2,
    },
    bubbleLeft: {
      backgroundColor: '#FFFFFF',
      borderTopLeftRadius: 0,
    },
    bubbleRight: {
      backgroundColor: '#007AFF',
      borderTopRightRadius: 0,
    },
    messageTextLeft: {
      color: '#333',
      fontSize: 16,
    },
    messageTextRight: {
      color: '#fff',
      fontSize: 16,
    },
    timestamp: {
      fontSize: 10,
      color: '#999',
      alignSelf: 'flex-end',
      marginTop: 5,
    },
    readReceipt: {
      marginLeft: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      padding: 10,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#DDD',
    },
    input: {
      flex: 1,
      maxHeight: 100,
      backgroundColor: '#F0F0F0',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 10,
      fontSize: 16,
      marginHorizontal: 10,
      color: '#333',
    },
    sendButton: {
      backgroundColor: '#007AFF',
      borderRadius: 20,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  