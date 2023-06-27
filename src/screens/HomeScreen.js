/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React from 'react'
import styles from './Screens.styles';

const HomeScreen = () => {
  return (
    <View style={[styles.container]}>
      <Text>Hello Welcome to Home screens</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae voluptates illum debitis. Possimus ad omnis consequuntur asperiores. Veniam itaque soluta voluptates sint commodi ad molestias, autem eum nobis corporis.
      </Text>
    </View>
  );
};

export default HomeScreen;