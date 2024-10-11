import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5Brands';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
// import FontAwesome6Brands from 'react-native-vector-icons/FontAwesome6Brands';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const VectorIcon = ({ name, type, color = 'black', size = 24, style = {} }) => {
  // Function to return the correct icon component based on type
  const getIconComponent = (type) => {
    switch (type) {
      case 'AntDesign':
        return AntDesign;
      case 'Entypo':
        return Entypo;
      case 'EvilIcons':
        return EvilIcons;
      case 'Feather':
        return Feather;
      case 'FontAwesome':
        return FontAwesome;
      case 'FontAwesome5':
        return FontAwesome5;
      case 'FontAwesome5Brands':
        return FontAwesome5Brands;
      case 'FontAwesome6':
        return FontAwesome6;
      case 'FontAwesome6Brands':
        return FontAwesome6Brands;
      case 'Fontisto':
        return Fontisto;
      case 'Foundation':
        return Foundation;
      case 'Ionicons':
        return Ionicons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'Octicons':
        return Octicons;
      case 'SimpleLineIcons':
        return SimpleLineIcons;
      case 'Zocial':
        return Zocial;
      default:
        return Feather; // Default to Feather if no type is provided
    }
  };

  // Get the Icon component based on the 'type' prop
  const IconComponent = getIconComponent(type);

  // Return the icon component with the given name, color, size, and styles
  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default VectorIcon;
