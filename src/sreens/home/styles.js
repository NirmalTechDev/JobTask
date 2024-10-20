import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  // },
  // header: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   padding: 20,
  //   backgroundColor: colors.ThemeBG,
  // },
  // greeting: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: colors.ThemeText,
  //   textAlignVertical: 'center',
  // },
  // profilePic: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 25,
  // },
  // actions: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   padding: 20,
  //   backgroundColor: colors.ThemeButton,
  // },
  // actionButton: {
  //   backgroundColor: colors.ThemeBorder,
  //   // padding: 15,
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 50,
  //   height: 50,
  // },
  // actionText: {
  //   color: '#fff',
  //   marginTop: 5,
  // },
  // map: {
  //   flex: 1,
  //   margin: 10,
  // },




  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  storisContainer:{
    paddingVertical:5,
    borderBottomWidth:0.5,
    borderColor:colors.ThemeBG,
  },
  myStory: {
    marginHorizontal: 5,
    alignItems: 'center',
    padding: 3,
    borderRadius: 15,
    borderWidth: 1,
  },
  story: {
    marginHorizontal: 5,
    alignItems: 'center',
    padding: 3,
    borderRadius: 15,
    borderWidth: 1,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  addIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 50,
},
  feedContainer: {
    flex: 1,
  },
  feed: {
    padding: 15,
  },
  postCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  postUserPic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  postEngagementBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  postCaption: {
    marginTop: 10,
    color: '#333',
  },
  mapIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 45,
    height: 45,
    backgroundColor: colors.ThemeBorder,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    elevation:5,
  },
  mapModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  mapContainer: {
    width: '95%',
    height: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.ThemeBorder,
  },
  map: {
    width: '93%',
    height: '95%',
    alignSelf: 'center',
  },
  closeMapBtn: {
    alignSelf: 'center',
    marginTop: 20,
   padding:13,
    backgroundColor: colors.ThemeBorder,
    borderRadius: 50,
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