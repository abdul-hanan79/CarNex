/* eslint-disable prettier/prettier */
import {  Text, View } from 'react-native';
import React from 'react';
import { Chip } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Components.styles';
const CategoryButton = (props) => {
  return (
    <Chip
    containerStyle={[styles.chip,styles.shadow]}
    title={props.title}
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['#1E5128', '#D8E9A8'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
/>
  )
}

export default CategoryButton;

