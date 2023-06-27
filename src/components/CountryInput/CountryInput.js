/* eslint-disable prettier/prettier */
import CountryPicker from 'react-native-country-picker-modal';
import { TextInput, View, StyleSheet } from 'react-native';
import { useState } from 'react'

const CountryInput = ({ countryCode, placeholder, value, onChangeText }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const onSelectCountry = (country) => {
        setModalVisible(false);
        onChangeText(country.callingCode[0]);
    };

    return (
        <View style={styles.container}>
            <CountryPicker
                visible={modalVisible}
                withFilter
                onSelect={onSelectCountry}
                countryCode={countryCode}
                onClose={() => setModalVisible(false)}
            />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                keyboardType="phone-pad"
            />
        </View>
    );
};
export default CountryInput;
const styles = StyleSheet.create({
    container: {
        // height:50,
        fontSize:20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize:20,
    },
});
