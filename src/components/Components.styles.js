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
    }
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