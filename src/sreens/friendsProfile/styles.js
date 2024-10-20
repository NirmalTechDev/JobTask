import { Dimensions, StyleSheet } from "react-native";
import colors from "../../utils/colors";
const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#f2f2f2',
    // },
    // headerContainer: {
    //     paddingHorizontal: 16,
    //     paddingVertical: 12,
    // },
    // header: {
    //     backgroundColor: '#6c63ff',
    //     paddingTop: 50,
    //     paddingBottom: 30,
    //     alignItems: 'center',
    //     borderBottomLeftRadius: 30,
    //     borderBottomRightRadius: 30,
    // },
    // profileImage: {
    //     width: 120,
    //     height: 120,
    //     borderRadius: 60,
    //     borderWidth: 3,
    //     borderColor: '#fff',
    // },
    // userName: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     color: '#fff',
    //     marginTop: 10,
    // },
    // userOccupation: {
    //     fontSize: 16,
    //     color: '#fff',
    //     marginTop: 5,
    // },
    // actionButtonsContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     marginVertical: 20,
    // },
    // actionButton: {
    //     backgroundColor: '#3498db',
    //     padding: 10,
    //     borderRadius: 10,
    //     alignItems: 'center',
    //     flexDirection: 'row',
    // },
    // actionButtonText: {
    //     color: '#fff',
    //     marginLeft: 10,
    //     fontWeight: 'bold',
    // },
    // statsContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     marginVertical: 20,
    // },
    // statBox: {
    //     alignItems: 'center',
    // },
    // statNumber: {
    //     fontSize: 22,
    //     fontWeight: 'bold',
    //     color: '#333',
    // },
    // statLabel: {
    //     fontSize: 14,
    //     color: '#888',
    // },
    // bioContainer: {
    //     paddingHorizontal: 20,
    //     marginTop: 20,
    // },
    // bioText: {
    //     fontSize: 16,
    //     color: '#555',
    //     textAlign: 'center',
    // },
    // logouttxt: {
    //     fontSize: 30,
    //     padding: 10,
    //     color: 'black',
    //     backgroundColor: 'red',
    //     textAlign: 'center',
    // },





    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        shadowColor: colors.shadowColor,
        elevation: 5,
        backgroundColor: colors.white,
    },
    username:{
        marginLeft:10,
    },
    headerIcons: {
        flexDirection: 'row',
    },
    coverImageContainer:{
        height:'13%',
    },
    coverImage:{
        height:"100%",
        width:"100%",
        resizeMode:'cover'
    },
    profileInfoContainer: {
        height:40,
        paddingVertical: 5,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        position:'relative',
    },
    profilePictureContainer: {
        position: 'relative',
        padding: 2,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.ThemeBorder,
        position:"absolute",
        top:-45,
        left:16,
        shadowColor:'black',
        elevation:5,
    },
    profilePicture: {
        width: 80,
        height: 80,
        borderRadius: 16,
        backgroundColor: '#ccc',
        resizeMode: 'cover',
    },
    addIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    profileDetails: {
        flex: 1,
        paddingHorizontal: 16,
    },
    websiteLink: {
        textDecorationLine: 'underline',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
    },
    stats: {
        flex:1,
        alignItems: 'center',
    },
    actionButtonsContainer: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    followButton: {
        flex: 1,
        backgroundColor: colors.ThemeBorder,
        padding: 10,
        borderRadius: 5,
        marginRight: 5,
        alignItems: 'center',
    },
    messageButton: {
        flex: 1,
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        marginLeft: 5,
        alignItems: 'center',
    },
    dropdownButton: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
    storiesContainer: {
        marginBottom: 10,
        paddingHorizontal: 16,
    },
    storyItem: {
        alignItems: 'center',
        marginRight: 12,
    },
    storyPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.Placeholdercolor,
    },
    addHighlight: {
        padding: 15,
        borderWidth: 0.7,
        backgroundColor: '#ddd',
        borderRadius: 50,
    },

    tabContainer: {
        flex: 1,
        paddingHorizontal: 16,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    tabIconButton: {
        flex: 1,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
    },
    gridContainer: {
        width: deviceWidth,
        marginTop: 5,
        paddingLeft: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridItem: {
        width: '32.4%',
        height: 110,
        backgroundColor:colors.ThemeText2,
        marginBottom: 3,
        marginRight: 3,
    },
    gridItem1: {
        width: '32.4%',
        height: 180,
        backgroundColor: colors.ThemeText2,
        marginBottom: 3,
        marginRight: 3,
    },
    gridItem2: {
        width: '32.4%',
        height: 110,
        backgroundColor: colors.ThemeText2,
        marginBottom: 3,
        marginRight: 3,
    },
});