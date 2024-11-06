// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import auth from '@react-native-firebase/auth';
// import { styles } from './styles';
// import { Ntext } from '../../components/Ntext';

// export default function ProfileScreen({ navigation }) {

//     const logout = () => {
//         auth()
//             .signOut()
//             .then(() => { navigation.navigate('login'); }).catch((error) => { console.log(error); });
//     };


//     return (
//         <View>
//             <View style={styles.headerContainer}>
//                 <Ntext title={'the_nirmal_ranpariya'} color='black' />
//             </View>
//         </View>
//     )

//     return null(
//         <ScrollView style={styles.container}>
//             {/* Header with background gradient */}
//             <View style={styles.header}>
//                 <Image
//                     source={{
//                         uri: 'https://randomuser.me/api/portraits/men/1.jpg',
//                     }}
//                     style={styles.profileImage}
//                 />
//                 <Text style={styles.userName}>John Doe</Text>
//                 <Text style={styles.userOccupation}>Software Developer</Text>
//             </View>

//             {/* Action Buttons */}
//             <View style={styles.actionButtonsContainer}>
//                 <TouchableOpacity style={styles.actionButton}>
//                     <Icon name="create-outline" size={24} color="#fff" />
//                     <Text style={styles.actionButtonText}>Edit Profile</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.actionButton}>
//                     <Icon name="people-outline" size={24} color="#fff" />
//                     <Text style={styles.actionButtonText}>Friends List</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={styles.actionButton}>
//                     <Icon name="settings-outline" size={24} color="#fff" />
//                     <Text style={styles.actionButtonText}>Settings</Text>
//                 </TouchableOpacity>
//             </View>

//             {/* Stats Section */}
//             <View style={styles.statsContainer}>
//                 <View style={styles.statBox}>
//                     <Text style={styles.statNumber}>120</Text>
//                     <Text style={styles.statLabel}>Posts</Text>
//                 </View>

//                 <View style={styles.statBox}>
//                     <Text style={styles.statNumber}>350</Text>
//                     <Text style={styles.statLabel}>Followers</Text>
//                 </View>

//                 <View style={styles.statBox}>
//                     <Text style={styles.statNumber}>180</Text>
//                     <Text style={styles.statLabel}>Following</Text>
//                 </View>
//             </View>

//             {/* Bio Section */}
//             <View style={styles.bioContainer}>
//                 <Text style={styles.bioText}>
//                     Passionate about technology and coding. I love exploring new frameworks and solving real-world problems through software.
//                 </Text>
//             </View>
//             <Pressable onPress={logout}>
//                 <Text style={styles.logouttxt}>Log Out</Text>
//             </Pressable>
//         </ScrollView>
//     );
// }


import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, Pressable, Alert } from 'react-native';
import VectorIcon from '../../components/Vectoricon';
import { Ntext } from '../../components/Ntext';
import { styles } from './styles';
import colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const deviceWidth = Dimensions.get('window').width;


const ProfileScreen = () => {
    const navigation = useNavigation();
    const posts = [1, 2, 3, 4];
    const reels = [1, 2, 3, 4];

    let tabIcon = [
        { name: 'grid-on', type: 'MaterialIcons' },
        { name: 'play-video', type: 'Foundation' },
        { name: 'people-outline', type: 'Ionicons' }
    ];
    const [selectedTab, setSelectedTab] = useState(0);


    const onTabPress = (index) => {
        setSelectedTab(index);
        flatListRef.scrollToIndex({ animated: true, index });
    };

    let flatListRef;


    const renderGrid = (style) => {
        return (
            <View style={styles.gridContainer}>
                {posts.map((_, index) => (
                    <View key={index} style={style} />
                ))}
            </View>
        );
    };
    const renderGrid1 = (style) => {
        return (
            <View style={styles.gridContainer}>
                {reels.map((_, index) => (
                    <View key={index} style={[style, { justifyContent: 'flex-end' }]} >
                        <Ntext title={index+1+'M'} color={colors.black} size={13} type='bold' style={{ paddingHorizontal: 5, paddingVertical: 5 }} />
                    </View>
                ))}
            </View>
        );
    };

    const renderItem = ({ index }) => {
        if (index === 0) {
            return renderGrid(styles.gridItem);
        } else if (index === 1) {
            return renderGrid1(styles.gridItem1);
        } else if (index === 2) {
            return renderGrid(styles.gridItem2);
        }
        return null;
    };

    return (
        <View style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <Ntext title='catchat_official' color='black' size={16} type='bold' />
                <VectorIcon name={'verified'} type={'MaterialIcons'} size={18} color={colors.ThemeBorder} style={{ marginLeft: 3, alignSelf: "center" }} />
                {/* <VectorIcon name={'chevron-down-outline'} type={'Ionicons'} size={14} style={{ alignSelf: 'center' }} /> */}
                <Pressable style={styles.headerIcons} onPress={() => { navigation.navigate('setting') }}>
                    <VectorIcon name={'menu-outline'} type={'Ionicons'} size={25} style={{ alignSelf: 'center' }} />
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Cover Image */}
                <TouchableOpacity style={styles.coverImageContainer} onLongPress={()=>{Alert.alert('Jay Dwarikadhish')}}>
                    <Image source={require('../../assets/images/dwarika.jpg')} style={styles.coverImage} />
                </TouchableOpacity>
                {/* Profile Image */}
                <View style={styles.profileInfoContainer}>
                    <View style={styles.profilePictureContainer}>
                        <Image
                            source={require('../../assets/images/cat.png')} // Add profile picture URI
                            style={styles.profilePicture}
                        />
                        <VectorIcon type={'MaterialIcons'} name={"add-circle"} color={"orange"} style={styles.addIcon} size={20} />
                    </View>
                    {/* blank container */}
                    <View style={{ width: '25%', backgroundColor: "red" }}></View>
                    {/* Stats */}
                    <View style={styles.statsContainer}>
                        <View style={styles.stats}>
                            <Ntext title='55' type='bold' color={colors.black} size={16} />
                            <Ntext title='Posts' color={'#666'} size={14} />
                        </View>
                        <View style={[styles.stats, { borderLeftWidth: 0.7, borderRightWidth: 0.7 }]}>
                            <Ntext title='152' type='bold' color={colors.black} size={16} />
                            <Ntext title='Followers' color={'#666'} size={14} />
                        </View>
                        <View style={styles.stats}>
                            <Ntext title='37' type='bold' color={colors.black} size={16} />
                            <Ntext title='Following' color={'#666'} size={14} />
                        </View>
                    </View>
                </View>

                <View style={styles.profileDetails}>
                    <Ntext title='CatChat' size={15} type='bold' color={colors.black} />
                    <Ntext title='Description' size={14} color={colors.Placeholdercolor} />
                    <Ntext title='Bio' size={14} color={colors.black} />
                    <Ntext title='www.buynr.life' size={14} color={'#007bff'} style={styles.websiteLink} />
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtonsContainer}>
                    {
                        true ?
                            <>
                                <TouchableOpacity style={[styles.followButton, { backgroundColor: colors.gray }]} onPress={() => { navigation.navigate('editProfile') }}>
                                    <Ntext title='Edit Profile' color={colors.Placeholdercolor} type='bold' size={15} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.messageButton}>
                                    <Ntext title='Share Profile' color={colors.Placeholdercolor} type='bold' size={15} />
                                </TouchableOpacity>
                            </>
                            :
                            <>
                                <TouchableOpacity style={styles.followButton}>
                                    <Ntext title='Following' color={colors.white} type='bold' size={15} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.messageButton}>
                                    <Ntext title='Message' color={colors.ThemeBorder} type='bold' size={15} />
                                </TouchableOpacity>
                            </>
                    }
                    {/* <TouchableOpacity style={styles.dropdownButton}>
                        <VectorIcon name={'chevron-down-outline'} type={'Ionicons'} size={20} color={colors.black} />
                    </TouchableOpacity> */}
                </View>

                {/* Stories */}
                <View style={styles.storiesContainer}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={[...Array(6)]}
                        horizontal={true}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(item, index) => {
                            if (item.index === 0) {
                                return (
                                    <TouchableOpacity style={styles.storyItem}>
                                        <View style={styles.addHighlight}>
                                            <VectorIcon name={'add-outline'} type={'Ionicons'} size={30} color={colors.Placeholdercolor} />
                                        </View>
                                        <Ntext title='New' size={12} color={colors.Placeholdercolor} />
                                    </TouchableOpacity>
                                )
                            } else {
                                return (
                                    <>
                                        <TouchableOpacity key={item.index} style={styles.storyItem}>
                                            <View style={styles.storyPlaceholder} />
                                            <Ntext title={'Highlight ' + item.index} size={12} color={colors.Placeholdercolor} />
                                        </TouchableOpacity>
                                    </>
                                )
                            }
                        }}
                    />
                </View>

                {/* Tabs */}
                <View style={{ flex: 1 }}>
                    <View style={styles.tabContainer}>
                        {tabIcon.map((val, ind) => (
                            <TouchableOpacity
                                key={ind}
                                style={[
                                    styles.tabIconButton,
                                    selectedTab === ind && { borderColor: colors.black }
                                ]}
                                onPress={() => onTabPress(ind)}
                            >
                                <VectorIcon name={val.name} type={val.type} size={25} color='black' />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Content */}
                    <FlatList
                        ref={(ref) => { flatListRef = ref; }}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={[...Array(3)]}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        onMomentumScrollEnd={(event) => {
                            const index = Math.round(event.nativeEvent.contentOffset.x / deviceWidth);
                            setSelectedTab(index);
                        }}
                    />
                </View>
                {/* <View style={{height:103.8,backgroundColor:'red'}}></View> */}
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;