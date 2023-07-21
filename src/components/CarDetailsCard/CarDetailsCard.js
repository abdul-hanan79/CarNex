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

        <Card containerStyle={[styles.shadow, styles.carDetailsCard, { width: 360, }]} wrapperStyle={{}}>
            {/* <Card.Divider /> */}
            <View
                style={{
                    position: "relative",
                    alignItems: "center",
                    flexDirection: 'row',
                    // justifyContent:'center'
                }}
            >
                <Image
                    style={{ width: 120, height: 120, borderRadius: 10 }}
                    resizeMode="cover"
                    source={{
                        uri: props.carImage,
                    }}
                />
                <View style={[styles.carDetails,
                    // { backgroundColor: 'yellow' }
                ]}>
                    {/* <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}> */}
                    <Card.FeaturedSubtitle style={styles.cardTitle}><Text numberOfLines={2} >{props.carName}</Text></Card.FeaturedSubtitle>
                    <Card.FeaturedSubtitle style={styles.cardPrice}>PKR {props.price}/day</Card.FeaturedSubtitle>
                    {/* </View> */}
                    <Card.Title style={{ textAlign: 'left' }}>{props.variant}</Card.Title>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <ChipBox component={<Text style={styles.cardText}><Icon name="location-arrow" size={20} color="#ffff" style={{ marginLeft: 5 }} />  {props.location}</Text>} />
                        <ChipBox component={<Text style={styles.cardText}><Icon name="gear" size={20} color="#ffff" style={{ marginLeft: 5 }} /> {props.gearType}</Text>} />
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
                <Badge
                    value={<Icon name="heart" size={20} color="#ffff" />}
                    containerStyle={{ position: 'absolute', top: '30%', right: 0 }}
                    badgeStyle={styles.thirdBadge}
                />
            </View>
        </Card>
    );
}



export default CarDetailsCard;

