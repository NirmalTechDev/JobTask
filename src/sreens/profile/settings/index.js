import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Alert } from 'react-native';
import VectorIcon from '../../../components/Vectoricon';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Ntext } from '../../../components/Ntext';
import colors from '../../../utils/colors';
import auth from '@react-native-firebase/auth';


const sections = [
    {
        title: 'Your Account',
        data: [
            { name: 'Accounts Center', icon: 'account-circle' }
        ],
    },
    {
        title: 'How you use Instagram',
        data: [
            { name: 'Saved', icon: 'bookmark' },
            { name: 'Archive', icon: 'archive' },
            { name: 'Your activity', icon: 'history' },
            { name: 'Notifications', icon: 'notifications' },
            { name: 'Time management', icon: 'timer' },
        ],
    },
    {
        title: 'Who can see your content',
        data: [
            { name: 'Account privacy', icon: 'lock' },
            { name: 'Close Friends', icon: 'group' },
            { name: 'Blocked', icon: 'block' },
            { name: 'Hide story and live', icon: 'visibility-off' },
        ],
    },
    {
        title: 'How others can interact with you',
        data: [
            { name: 'Messages and story replies', icon: 'message' },
            { name: 'Tags and mentions', icon: 'tag' },
            { name: 'Comments', icon: 'comment' },
            { name: 'Sharing', icon: 'share' },
            { name: 'Restricted', icon: 'remove-circle' },
            { name: 'Limit interactions', icon: 'filter-list' },
            { name: 'Hidden Words', icon: 'visibility-off' },
            { name: 'Follow and invite friends', icon: 'person-add' },
        ],
    },
    {
        title: 'Your app and media',
        data: [
            { name: 'Device permissions', icon: 'devices' },
            { name: 'Archiving and downloading', icon: 'file-download' },
            { name: 'Accessibility and translations', icon: 'translate' },
            { name: 'Language', icon: 'language' },
            { name: 'Data usage and media quality', icon: 'data-usage' },
            { name: 'App website permissions', icon: 'language' },
        ],
    },
    {
        title: 'For families',
        data: [
            { name: 'Family Center', icon: 'family-restroom' },
        ],
    },
    {
        title: 'For professionals',
        data: [
            { name: 'Account type and tools', icon: 'work' },
            { name: 'Meta Verified', icon: 'verified' },
        ],
    },
    {
        title: 'Orders and Fundraisers',
        data: [
            { name: 'Orders and payments', icon: 'shopping-cart' },
        ],
    },
    {
        title: '',
        data: [
            { name: 'Log Out', icon: 'logout', action: 'logout' },
        ],
    },
];


const SettingScreen = () => {
    const navigation = useNavigation();
    const GoBack = () => {
        navigation.goBack();
    }
    const logout = () => {
        Alert.alert()
        auth()
            .signOut()
            .then(() => { navigation.navigate('login'); }).catch((error) => { console.log(error); });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.item,item.action && {backgroundColor:'rgba(225,225,225,0.5)'}]} onPress={() => { item.action === 'logout' ? logout() : null }}>
            <VectorIcon name={item.icon} type={'MaterialIcons'} size={24} color={'#000'} />
            <Ntext title={item.name} size={16} color={colors.black} style={styles.itemText}/>
            <VectorIcon name={'chevron-right'} type={'MaterialIcons'} size={24} color={'#999'} />
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section: { title } }) => (
        <>
            {/* <View style={styles.horizontalLine} /> */}
            <Ntext title={title} size={18} type='bold' color={colors.black} style={styles.sectionHeader}  />
        </>


    );

    return (
        <View style={styles.container}>
            <View style={styles.header} onPress={() => { GoBack() }} >
                <TouchableOpacity style={styles.settingBack} onPress={() => { GoBack() }} >
                    <VectorIcon type={'MaterialIcons'} name={'chevron-left'} color='#000' size={25} />
                    <Ntext title='Settings' color={colors.black} size={18} type='bold' />
                </TouchableOpacity>
            </View>
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    );
};


export default SettingScreen;
