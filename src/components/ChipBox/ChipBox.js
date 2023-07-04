/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Chip } from '@rneui/themed'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../colors'

const ChipBox = (props) => {
    return (
        <Chip
            containerStyle={[styles.chip, styles.shadow]}
            title={props.component}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
                colors: [colors.primary, colors.secondary],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
            }}
        />
    )
}

export default ChipBox

const styles = StyleSheet.create({})