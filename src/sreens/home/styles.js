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
      padding: 20,
      backgroundColor: colors.ThemeBG,
    },
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.ThemeText,
      textAlignVertical: 'center',
    },
    profilePic: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 20,
      backgroundColor: colors.ThemeButton,
    },
    actionButton: {
      backgroundColor: colors.ThemeBorder,
      // padding: 15,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
    },
    actionText: {
      color: '#fff',
      marginTop: 5,
    },
    map: {
      flex: 1,
      margin: 10,
    },
    customMarker: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    markerImage: {
      width: 40,
      height: 40,
      borderRadius: 50,
      borderWidth: 2,
      borderColor: 'white',
    },
    markerText: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });