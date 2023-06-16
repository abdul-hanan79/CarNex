/* eslint-disable prettier/prettier */
import { Button } from '@rneui/themed';
import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../colors';
const MainButton = (props) => {
  return (
    <Button
      title={props.title}
      onPress={props.onPress}
      buttonStyle={{
        backgroundColor: colors.secondary,
        borderColor: 'white',
        borderRadius: 30,
      }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 0,
      }}
      titleStyle={{ fontSize: 22 }}
    />
  );
};

export default MainButton