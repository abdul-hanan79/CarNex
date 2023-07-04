/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Card } from "@rneui/base";
import styles from '../Components.styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge, Chip } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import ChipBox from '../ChipBox/ChipBox';


const CarDetailsCard = (props) => {
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
                    style={{ width: "100%", height: 150, borderRadius: 10 }}
                    resizeMode="cover"
                    source={{
                        uri:
                            "https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg"
                    }}
                />
                <View style={styles.carDetails}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Card.FeaturedSubtitle style={styles.cardTitle}>{props.carName}</Card.FeaturedSubtitle>
                        <Card.FeaturedSubtitle style={styles.cardPrice}>PKR {props.price}/day</Card.FeaturedSubtitle>
                    </View>
                    <Card.Title style={{ textAlign: 'left' }}>Range Rover Sport SVR</Card.Title>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <ChipBox component={<Text style={styles.cardText}><Icon name="location-arrow" size={20} color="black" style={{ marginLeft: 5 }} />  Faisalabad</Text>} />
                        <ChipBox component={<Text style={styles.cardText}><Icon name="gear" size={20} color="black" style={{ marginLeft: 5 }} />  Auto</Text>} />

                    </View>
                </View>
                <Badge

                    status="success" value="Featured"
                    containerStyle={{ position: 'absolute', top: 0, left: 1 }}
                    badgeStyle={styles.firstBadge}
                />
                <Badge

                    status="success" value="Insured"
                    containerStyle={{ position: 'absolute', top: 20, left: 1 }}
                    badgeStyle={styles.secondBadge}
                />
            </View>
        </Card>
    );
}



export default CarDetailsCard;

