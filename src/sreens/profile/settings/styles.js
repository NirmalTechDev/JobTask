import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: 'row',
        elevation: 5,
        backgroundColor: 'white'
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
        paddingHorizontal:16,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 16,
    },
    itemText: {
        flex: 1,
        fontSize: 16,
        color: '#000',
        marginLeft: 15,
    },
    chevron: {
        opacity: 0.5,
    },
    horizontalLine: {
        backgroundColor: 'black',
        padding: 1,
    }
});