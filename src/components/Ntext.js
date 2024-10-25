import React from "react";
import { StyleSheet, Text } from "react-native";

export const Ntext = ({
    title = "hey Nirmal",   // Default value for title
    color = "#ff1493",           // Default color is black
    size = 20,                 // Default font size is 20
    type = "regular",          // Default font weight is 'regular'
    numberOfLine,
    style = {}                 // Default style is an empty object
}) => {

    const getFontWeight = (type) => {
        switch (type) {
            case 'bold':
                return 'bold';
            case 'medium':
                return '500';
            case 'regular':
                return 'normal';
            case 'heavy':
                return '900';
            default:
                return 'normal';
        }
    };

    return (
        <Text
            style={[
                styles.txt,
                { color: color, fontSize: size, fontWeight: getFontWeight(type), numberOfLine: numberOfLine },
                style
            ]}
        >
            {title}
        </Text>
    );
};

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
        textAlignVertical: 'center'
    }
});
