/* eslint-disable prettier/prettier */
import { Button } from '@rneui/themed';
import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../colors';
const MainButton = (props) => {
  return (
    <Button
      title={props.title}
      buttonStyle={{
        backgroundColor: colors.secondary,
        borderColor: 'white',
        borderRadius: 30,
      }}
      containerStyle={{
        width: 300,
        marginHorizontal: 50,
        marginVertical: 0,
      }}
      titleStyle={{ fontWeight: 'bold', fontSize: 26 }}
    />
  );
};

export default MainButton