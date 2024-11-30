// import React from 'react';
// import { View, FlatList, Dimensions, StyleSheet, Text } from 'react-native';
// import Video from 'react-native-video'; // You may need to install this package

// const { width, height } = Dimensions.get('window');

// // Sample video data
// const videoData = [
//     { id: '1', item: require('../../assets/videos/one.mp4') },
//     { id: '2', item: require('../../assets/videos/two.mp4') },
//     { id: '3', item: require('../../assets/videos/three.mp4') },
// ];


// const VibesScreen = () => {
//     const renderItem = ({ item }) =>
//     (
//         <View style={styles.videoContainer}>
//             <Video
//                 source={item.item}
//                 style={styles.video}
//                 repeat
//                 onBuffer={onBuffer}
//                 onError={onError}
//             />
//             {/* Overlay for video title or other elements */}
//             <View style={styles.overlay}>
//                 {/* <Text style={styles.overlayText}>Vibes Video {item.id}</Text> */}
//             </View>
//         </View>
//     );

//     return (
//         <FlatList
//             data={videoData}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//             pagingEnabled
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             style={styles.container}
//         />
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     videoContainer: {
//         width,
//         height,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     video: {
//         width: '100%',
//         height: '100%',
//         resizeMode: 'center',
//     },
//     overlay: {
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//     },
//     overlayText: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default VibesScreen;


import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, RefreshControl } from 'react-native';
import colors from '../../utils/colors';

const data = [
    { id: '1', videoUrl: 'https://your-video-url-1.mp4' },
    { id: '2', videoUrl: 'https://your-video-url-2.mp4' },
    { id: '3', videoUrl: 'https://your-video-url-3.mp4' },
    // Add more video URLs as needed
];


const VibesScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const Reel = ({ videoUrl }) => {
        return (
            <View style={styles.VideoContainer}>
                {/* <Video
                    source={{ uri: videoUrl }}
                    style={styles.video}
                    resizeMode="cover"
                    repeat
                    muted
                    controls={false}
                    paused={false}
                /> */}
            </View>
        );
    };

    const onRefresh = () => {
        setRefreshing(true);
        // Simulated delay for network request
        setTimeout(() => setRefreshing(false), 2000);
    };


    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Reel videoUrl={item.videoUrl} />}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            snapToInterval={Dimensions.get('window').height}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.black} />}
            decelerationRate="fast"
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    VideoContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default VibesScreen;
