/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, Icon } from 'react-native';
import { faCar, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const SingleCarDetail = ({params}) => {
console.log(params)
    // const { carName, price, location, gearType, carImage, variant } = props;
    // console.log(carName, price, location, gearType, carImage)
    return (
        <View>
            <Text>
                hello
            </Text>
        </View>
        // <View style={styles.card}>
        //     <Image
        //         style={styles.image}
        //         source={{ uri: carImage  }}
        //     />
        //     <View style={styles.content}>
        //         <Text style={styles.title}>{carName}</Text>
        //         <Icon name={faCar} size={24} />
        //         <Text style={styles.price}>${price}</Text>
        //         <Icon name={faLocationArrow} size={24} />
        //         <Text style={styles.location}>Location: {location}</Text>
        //         <Text style={styles.gearType}>Gear Type: {gearType}</Text>
        //         <Text style={styles.variant}>Variant: {variant}</Text>
        //     </View>
        // </View>
    );

}

const styles = {
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 4,
        margin: 8,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 4,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
    },
    location: {
        fontSize: 14,
    },
    gearType: {
        fontSize: 14,
    },
    variant: {
        fontSize: 14,
    },
};

export default SingleCarDetail;