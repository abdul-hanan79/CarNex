/* eslint-disable prettier/prettier */


import React, { useEffect, useState } from 'react';
import {
    Alert,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
// import { BASE_URL, API_KEY } from '@env';
import {} from '@env'

const UploadCarDetailesScreen = () => {
    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [cityData, setCityData] = useState([]);
    const [country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);
    const [countryName, setCountryName] = useState(null);
    const [stateName, setStateName] = useState(null);
    const [cityName, setCityName] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        var config = {
            method: 'get',
            url: `${BASE_URL}/countries`,
            headers: {
                'X-CSCAPI-KEY': `${API_KEY}`
            }
        };

        axios(config)
            .then(response => {
                console.log(JSON.stringify(response.data));
                var count = Object.keys(response.data).length;
                let countryArray = [];
                for (var i = 0; i < count; i++) {
                    countryArray.push({
                        value: response.data[i].iso2,
                        label: response.data[i].name,
                    });
                }
                setCountryData(countryArray);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleState = countryCode => {
        var config = {
            method: 'get',
            url: `${BASE_URL}/countries/${countryCode}/states`,
            headers: {
                'X-CSCAPI-KEY': API_KEY,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                var count = Object.keys(response.data).length;
                let stateArray = [];
                for (var i = 0; i < count; i++) {
                    stateArray.push({
                        value: response.data[i].iso2,
                        label: response.data[i].name,
                    });
                }
                setStateData(stateArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleCity = (countryCode, stateCode) => {
        var config = {
            method: 'get',
            url: `${BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`,
            headers: {
                'X-CSCAPI-KEY': API_KEY,
            },
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                var count = Object.keys(response.data).length;
                let cityArray = [];
                for (var i = 0; i < count; i++) {
                    cityArray.push({
                        value: response.data[i].id,
                        label: response.data[i].name,
                    });
                }
                setCityData(cityArray);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 15 }}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={countryData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select country' : '...'}
                    searchPlaceholder="Search..."
                    value={country}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setCountry(item.value);
                        handleState(item.value);
                        setCountryName(item.label);
                        setIsFocus(false);
                    }}
                />
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={stateData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select state' : '...'}
                    searchPlaceholder="Search..."
                    value={state}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setState(item.value);
                        handleCity(country, item.value);
                        setStateName(item.label);
                        setIsFocus(false);
                    }}
                />
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={cityData}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select city' : '...'}
                    searchPlaceholder="Search..."
                    value={city}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setCity(item.value);
                        setCityName(item.label);
                        setIsFocus(false);
                    }}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#0F3460',
                        padding: 20,
                        borderRadius: 15,
                        alignItems: 'center',
                    }}
                    onPress={() =>
                        Alert.alert(
                            `You have selected\nCountry: ${countryName}\nState: ${stateName}\nCity: ${cityName}`,
                        )
                    }>
                    <Text
                        style={{
                            color: '#fff',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                        }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UploadCarDetailesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#533483',
        padding: 16,
        justifyContent: 'center',
        alignContent: 'center',
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
// import React, { useState } from 'react';
// import { View, Text, ScrollView, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Pressable } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import useLogin from '../customHooks/useLogin';
// import { Input, Button } from 'react-native-elements';
// import DropDownPicker from 'react-native-dropdown-picker';
// const CarForm = () => {
//     const [open, setOpen] = useState(false);
//     // const [value, setValue] = useState(null);
//     // const [items, setItems] = useState([
//     //     { label: 'Apple', value: 'apple' },
//     //     { label: 'Banana', value: 'banana' }
//     // ]);
//     const [open1, setOpen1] = useState(false);
//     const [open2, setOpen2] = useState(false);
//     const { handleScreenPress } = useLogin();
//     const [open3, setOpen3] = useState(false);

//     const initialValues = {
//         // ...other field values
//         carMake: '',
//         carModel: '',
//         modelYear: '',
//         // ...other field values
//     };

//     const validationSchema = Yup.object().shape({
//         // ...other field validations
//         carMake: Yup.string().required('Car make is required'),
//         carModel: Yup.string().required('Car model is required'),
//         modelYear: Yup.string().required('Model year is required'),
//         // ...other field validations
//     });

//     const handleSubmit = (values) => {
//         // Handle form submission
//         console.log("you click this button", values);
//     };
//     const carModelItems = [
//         { label: 'Make 1', value: 'make1' },
//         { label: 'Make 2', value: 'make2' },
//         // Add more make options here
//     ]
//     return (
//         <View style={[styles.container, { backgroundColor: 'white' }]}>

//             <TouchableWithoutFeedback onPress={handleScreenPress}>
//                 <KeyboardAvoidingView style={[styles.inputContainer]} behavior="padding" >

//                     <FlatList
//                         data={[1]} // Dummy data to enable scrolling
//                         renderItem={() => (
//                             <Formik
//                                 initialValues={initialValues}
//                                 validationSchema={validationSchema}
//                                 onSubmit={handleSubmit}
//                             >
//                                 {({ values, handleChange, handleSubmit, errors, touched }) => (
//                                     <View style={styles.fieldContainer}>
//                                         <Text style={styles.label}>Model Year</Text>
//                                         <DropDownPicker
//                                             items={[
//                                                 { label: 'Year 1', value: 'year1' },
//                                                 { label: 'Year 2', value: 'year2' },
//                                                 // Add more year options here
//                                             ]}
//                                             defaultValue={values.modelYear}
//                                             containerStyle={{ height: 40, marginBottom: 10 }}
//                                             style={{ backgroundColor: '#fafafa' }}
//                                             dropDownStyle={{ backgroundColor: '#fafafa' }}
//                                             onChangeItem={(item) => handleChange('modelYear')(item.value)}
//                                         />
//                                         {errors.modelYear && touched.modelYear && (
//                                             <Text style={styles.error}>{errors.modelYear}</Text>
//                                         )}
//                                         <TouchableOpacity onPress={()=>console.log("hello")}>
//                                             <Text>hello</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 )}
//                             </Formik>
//                         )}
//                         keyExtractor={(item, index) => index.toString()}
//                     />

//                 </KeyboardAvoidingView>
//             </TouchableWithoutFeedback>

//         </View >
//     );
// };

// const styles = {
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#fff',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 3,
//         elevation: 5,
//     },
//     formContainer: {
//         backgroundColor: 'red',
//         height: 200,
//         // justifyContent:'center'
//     },
//     column: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 20,
//     },
//     fieldContainer: {
//         flex: 1,
//         marginBottom: 15,
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     input: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         paddingHorizontal: 10,
//     },
//     error: {
//         color: 'red',
//         fontSize: 14,
//         marginTop: 5,
//     },
//     button: {
//         backgroundColor: 'blue',
//         paddingVertical: 10,
//         alignItems: 'center',
//         borderRadius: 5,
//         marginTop: 20,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     dropDownContainer: { backgroundColor: '#3f3', fontSize: 28, },
//     dropDownContainerStyle: { height: 70, marginBottom: 10, backgroundColor: 'red', },
//     dropDownMenuStyle: { backgroundColor: '#eeee' }
// }
// export default CarForm;



