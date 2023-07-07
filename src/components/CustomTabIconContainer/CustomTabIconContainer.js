/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomTabIconContainer = ({ children, focused }) => {
    const containerStyle = focused ? styles.tabIconContainerFocused : styles.tabIconContainer;

    return <View style={containerStyle}>{children}</View>;
}

export default CustomTabIconContainer

const styles = StyleSheet.create({
    tabIconContainer: {
        backgroundColor: 'transparent', // Set the background color of the tab icon container
        borderRadius: 20, // Set the border radius to achieve a custom shape
        padding: 8, // Add padding to position the icon within the container
    },
    tabIconContainerFocused: {
        backgroundColor: 'blue', // Set a different background color for the focused tab
        borderRadius: 20,
        padding: 8,
    },
});
