/* eslint-disable prettier/prettier */
// styles.js
/*
--- 01 TYPOGRAPHY SYSTEM

- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700

- Line heights
Default: 1
Small: 1.05
Medium: 1.2
Paragraph default: 1.6
Large: 1.8

- Letter spacing
-0.5px
0.75px

--- 02 COLORS

- Primary: #e67e22
- Tints:
#fdf2e9
#fae5d3
#eb984e

- Shades: 
#cf711f
#45260a

- Accents:
- Greys

#888
#767676 (lightest grey allowed on #fff)
#6f6f6f (lightest grey allowed on #fdf2e9)
#555
#333

--- 05 SHADOWS

0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

--- 06 BORDER-RADIUS

Default: 9px
Medium: 11px

--- 07 WHITESPACE

- Spacing system (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
*/

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
        // backgroundColor: 'red',
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
        // color: 'white',
        color:colors.heading,
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
    // for scroll view
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 20,

    },
    para: {
        fontSize: 20,
    },

});

export default styles;
