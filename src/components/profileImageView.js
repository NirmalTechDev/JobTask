import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

const LongPressImage = ({ imageUri, imageStyle }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLongPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Display the image with long-press functionality */}
      <Pressable
        onLongPress={handleLongPress}
      >
        <Image source={{ uri: imageUri }} style={[styles.image, imageStyle]} />
      </Pressable>

      {/* Modal for full-screen image with blur background */}
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
          <Image source={{ uri: imageUri }} style={styles.fullscreenImage} />
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
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
});

export default LongPressImage;
