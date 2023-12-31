/* eslint-disable prettier/prettier */
// styles.js

import { StyleSheet } from 'react-native';
import { colors } from '../colors';
const styles = StyleSheet.create({
    //INPUTFIELDSHADOW
    inputFieldView: {
        width: 370,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 5, // Controls the shadow depth
        shadowColor: '#000000', // Shadow color
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 5, // Shadow radius
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    chip: {
        width: 'auto',
    },
    shadow: {
        borderRadius: 10,
        elevation: 5, // Controls the shadow depth
        shadowColor: '#000000', // Shadow color
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 5, // Shadow radius
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    carDetailsCard: {
        borderRadius: 10,
        // backgroundColor:'pink',
        padding: 10,
        backgroundColor:'red'
        // color:'black',
        // width: '100%',
        // height: 153.60,
    },
    carDetails: {
        // width: 'inherit',
        // marginTop:10,
        // padding: 15,
        paddingLeft: 15
        // color: colors.text,
        // backgroundColor:'red',
    },
    cardTitle: {
        color: colors.text,
        fontSize: 24,
    },
    cardPrice: {
        color: colors.heading,
        fontSize: 16,
    },
    cardText: {
        color: colors.lightText,
        fontSize: 16,
    },
    firstBadge: {
        borderRadius: 0,
        backgroundColor: 'red',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: 'red',
    },
    secondBadge: {
        borderRadius: 0,
        backgroundColor: 'red',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: 'red',
    },
    thirdBadge: {
        backgroundColor: colors.lightBackground,
        height: 35,
        width: 35,
        borderRadius: 40,

    },
    // GENERAL CLASS
    heading: {},
    text: {},
    para: {},


});

export default styles;
// import * as React from "react";
// import { Input } from "@rneui/base";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default () => {
//   return (
//     <Input
//       containerStyle={{}}
//       disabledInputStyle={{ background: "#ddd" }}
//       inputContainerStyle={{}}
//       errorMessage="Oops! that's not correct."
//       errorStyle={{}}
//       errorProps={{}}
//       inputStyle={{ borderBottom: "null" }}
//       label="User Form"
//       labelStyle={{}}
//       labelProps={{}}
//       leftIcon={<Icon name="account-outline" size={20} />}
//       leftIconContainerStyle={{}}
//       rightIcon={<Icon name="close" size={20} />}
//       rightIconContainerStyle={{}}
//       placeholder="Enter Name"
//     />
//   );
// }