import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.ThemeBG,
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    felds_container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 35,
        alignSelf: 'flex-start',
        marginLeft: 45,
        fontWeight: 'bold',
        marginVertical: 20,
        color: colors.ThemeBorder,
    },
    subHeader_parent: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 45,
    },
    subHeader: {
        fontSize: 16,
        marginBottom: 20,
        color: '#e09f3e',
        fontWeight: '600',
        alignSelf: 'flex-start',
    },
    numbers: {
        fontSize: 16,
        marginBottom: 20,
        color: colors.ThemeBG,
        fontWeight: '600',
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 3,
        paddingHorizontal: 3,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: colors.ThemeButton,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 20,
        fontSize: 16,
        backgroundColor: colors.ThemeBG,
        color: colors.ThemeButton,
        placeholderTextColor: colors.ThemeButton,
    },
    button: {
        backgroundColor: colors.ThemeBorder,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    loader: {
        marginHorizontal: 24,
    },
    buttonText: {
        fontWeight: '900',
        color: colors.ThemeBG,
        fontSize: 17,
    },
});
