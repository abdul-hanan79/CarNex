/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { Card } from "@rneui/base";
import styles from '../Components.styles';

const CarDetailsCard = () => {
    return (

        <Card containerStyle={[styles.shadow, styles.carDetailsCard]} wrapperStyle={{}}>
            {/* <Card.Divider /> */}
            <View
                style={{
                    position: "relative",
                    alignItems: "flex-start"
                }}
            >
                <Image
                    style={{ width: "100%", height: 100, borderRadius: 10 }}
                    resizeMode="cover"
                    source={{
                        uri:
                            "https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg"
                    }}
                />
                <View style={styles.carDetails}>
                    <Card.FeaturedTitle>Range Rover</Card.FeaturedTitle>
                    <Card.FeaturedSubtitle style={{ color: 'black' }}>Range Rover Sport SVR</Card.FeaturedSubtitle>
                    <Text>Pranshu Chittora</Text>
                </View>
            </View>
        </Card>
    );
}



export default CarDetailsCard

