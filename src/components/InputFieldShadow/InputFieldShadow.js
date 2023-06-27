/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../Components.styles';

const InputFieldShadow = (props) => {
    return (
        <View style={styles.inputFieldView}>
            {props.input}
        </View>
    );
};

export default InputFieldShadow;

// const styles = StyleSheet.create({})