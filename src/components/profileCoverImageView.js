import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';
const deviceWidth = Dimensions.get('window').width;
const CoverPhoto = ({ coverPhotoUri, customCoverStyle }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Cover photo */}
            <TouchableOpacity onPress={handlePress}>
                <Image source={coverPhotoUri} style={[styles.coverPhoto, customCoverStyle]} />
            </TouchableOpacity>

            {/* Modal to display the cover photo */}
            <Modal
                visible={isModalVisible}
                transparent
                animationType="fade"
                onRequestClose={handleCloseModal}
            >
                <TouchableOpacity style={styles.modalContainer} onPress={handleCloseModal}>
                    <BlurView
                        style={StyleSheet.absoluteFill}
                        blurType="light"
                        blurAmount={10}
                        reducedTransparencyFallbackColor="white"
                    />
                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.scrollContainer}
                    >
                        <Image source={coverPhotoUri} style={styles.fullscreenCoverPhoto} />
                    </ScrollView>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coverPhoto: {
        width: deviceWidth,
        resizeMode: 'cover',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullscreenCoverPhoto: {
        width: deviceWidth, // Larger than screen width
        height: 120,
        resizeMode: 'cover',
    },
});

export default CoverPhoto;
