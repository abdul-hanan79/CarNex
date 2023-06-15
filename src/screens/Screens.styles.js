/* eslint-disable prettier/prettier */
// styles.js

import { StyleSheet } from 'react-native';
import { colors } from '../colors';
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 1,
    },
    container: {
        flex: 1,
        // backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // padding: {
        //     top: 50,
        //     right: 20,
        //     bottom: 30,
        //     left: 40,
        // },
    },
    title: {
        fontSize: 46,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    // button: {
    //     backgroundColor: '#f4511e',
    //     paddingHorizontal: 20,
    //     paddingVertical: 10,
    //     borderRadius: 5,
    // },
    // buttonText: {
    //     color: 'white',
    //     fontSize: 18,
    //     fontWeight: 'bold',
    // },
    // buttonContainer: {
    //     position: 'absolute',
    //     bottom: 20,
    //     left: 0,
    //     right: 0,
    //     alignItems: 'center',
    // },
    inputContainer: {
        width: '100%',
    },
    credentialLinks: {
        gap: 10,
        // justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
