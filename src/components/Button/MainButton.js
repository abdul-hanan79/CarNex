/* eslint-disable prettier/prettier */
import { Button } from '@rneui/themed';
import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainButton = (props) => {
  return (
    <Button
      title={props.title}
      onPress={props.onPress}
      disabled={!props.disabled ? true : false}
      buttonStyle={{
        backgroundColor: colors.secondary,
        borderColor: colors.secondary,
        // borderWidth:7
        // borderRadius: 15,
      }}
      containerStyle={{
        width: 200,
        marginHorizontal: 50,
        marginVertical: 0,
        // backgroundColor: 'red',
        borderRadius: 20,
        elevation: 5, // Controls the shadow depth
        shadowColor: '#000000', // Shadow color
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 5, // Shadow radius
        shadowOffset: {
          width: 0,
          height: 2,
        },
      }}
      titleStyle={{ fontSize: 22 }}
      icon={<Icon name="arrow-right" size={20} color="white" style={{ marginLeft: 5 }} />}
      iconRight
    />
  );
};

export default MainButton