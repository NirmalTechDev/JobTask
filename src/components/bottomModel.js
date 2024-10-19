import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const BottomSheet = ({ visible, height = 300, children, onClose }) => {
  const refRBSheet = useRef();

  useEffect(() => {
    if (visible) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [visible]);

  return (
    <RBSheet
      ref={refRBSheet}
      height={height}
      openDuration={250}
      closeOnDragDown={true}
      closeOnPressMask={true}
      onClose={onClose}
      customStyles={{
        wrapper: styles.wrapper,
        draggableIcon: styles.draggableIcon,
        container: styles.container
      }}
    >
      <View style={styles.content}>
        {children}
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default BottomSheet;
