/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { Button } from 'react-native-elements';
import * as Yup from 'yup';
import MainButton from '../components/Button/MainButton';

const CarDetailsSchema = Yup.object().shape({
    carMake: Yup.string().required('Car Make is required'),
    carModel: Yup.string().required('Car Model is required'),
    carYear: Yup.number()
        .typeError('Car Year must be a number')
        .integer('Car Year must be an integer')
        .required('Car Year is required')
        .min(1900, 'Car Year must be at least 1900')
        .max(new Date().getFullYear(), `Car Year can't be in the future`),
    carAssembly: Yup.string().required('Car Assembly is required'),
    carVariant: Yup.string().required('Car Variant is required'),
    carTransmission: Yup.string().required('Car Transmission is required'),
    carType: Yup.string().required('Car Type is required'),
    engineType: Yup.string().required('Engine Type is required'),
    engineCapacity: Yup.number()
        .typeError('Engine Capacity must be a number')
        .positive('Engine Capacity must be a positive number')
        .required('Engine Capacity is required'),
    seatingCapacity: Yup.number()
        .typeError('Seating Capacity must be a number')
        .integer('Seating Capacity must be an integer')
        .positive('Seating Capacity must be a positive number')
        .required('Seating Capacity is required'),
    bodyColor: Yup.string().required('Body Color is required'),
    betweenCities: Yup.string().required('Between Cities is required'),
    registrationCity: Yup.string().required('Registration City is required'),
    pickupCity: Yup.string().required('Pickup City is required'),
    driverAvailability: Yup.boolean().required('Driver Availability is required'),
    carMileage: Yup.number()
        .typeError('Car Mileage must be a number')
        .positive('Car Mileage must be a positive number')
        .required('Car Mileage is required'),
    carRents: Yup.number()
        .typeError('Car Rents must be a number')
        .positive('Car Rents must be a positive number')
        .required('Car Rents is required'),
    insured: Yup.boolean().required('Insured status is required'),
    descriptions: Yup.string().required('Description is required'),
});


const UploadCarDetailesScreen = () => {
    const handleSubmit1 = (values) => {
        // Handle form submission
        console.log("the button is clicked");
    };

    return (

        <View style={styles.container}>
            <FlatList data={[1]}
                renderItem={() => (
                    <Formik
                        initialValu={{
                            carMake: '',
                            carModel: '',
                            carYear: '',
                            carAssembly: '',
                            carVariant: '',
                            carTransmission: '',
                            carType: '',
                            engineType: '',
                            enginceCapacity: '',
                            seatingCapacity: '',
                            bodyColor: '',
                            betweenCitites: '',
                            registrationCity: '',
                            pickupCity: '',
                            driverAvailability: '',
                            carMileage: '',
                            carRents: '',
                            insured: '',
                            descriptions: '',

                            // Add more fields here if needed
                        }}
                        validationSchema={CarDetailsSchema}
                        onSubmit={handleSubmit1}
                    >
                        {({ values, handleChange, handleSubmit, errors, touched,isValid,dirty }) => (
                            <>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Car Model</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carModel')}
                                        value={values.carModel}
                                        placeholder="Enter car model"
                                    />
                                    {errors.carModel && touched.carModel && (
                                        <Text style={styles.error}>{errors.carModel}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Car Year</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carYear')}
                                        value={values.carYear.toString()}
                                        placeholder="Enter car year"
                                        keyboardType="numeric"
                                    />
                                    {errors.carYear && touched.carYear && (
                                        <Text style={styles.error}>{errors.carYear}</Text>
                                    )}
                                </View>


                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Car Assembly</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carAssembly')}
                                        value={values.carAssembly.toString()}
                                        placeholder="Enter car assembly"
                                    />
                                    {errors.carAssembly && touched.carAssembly && (
                                        <Text style={styles.error}>{errors.carAssembly}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Car Variant</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carVariant')}
                                        value={values.carVariant.toString()}
                                        placeholder="Enter car variant"
                                    />
                                    {errors.carVariant && touched.carVariant && (
                                        <Text style={styles.error}>{errors.carVariant}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Car Transmission</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carTransmission')}
                                        value={values.carTransmission.toString()}
                                        placeholder="Enter car transmission"
                                    />
                                    {errors.carTransmission && touched.carTransmission && (
                                        <Text style={styles.error}>{errors.carTransmission}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Car Type</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carType')}
                                        value={values.carType.toString()}
                                        placeholder="Enter car type"
                                    />
                                    {errors.carType && touched.carType && (
                                        <Text style={styles.error}>{errors.carType}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Engine Type</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('engineType')}
                                        value={values.engineType.toString()}
                                        placeholder="Enter engine type"

                                    />
                                    {errors.engineType && touched.engineType && (
                                        <Text style={styles.error}>{errors.engineType}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Engince Capacity (CC)</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('enginceCapacity')}
                                        value={values.enginceCapacity.toString()}
                                        placeholder="Enter engince capacity"
                                        keyboardType="numeric"
                                    />
                                    {errors.enginceCapacity && touched.enginceCapacity && (
                                        <Text style={styles.error}>{errors.enginceCapacity}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Seating Capacity</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('seatingCapacity')}
                                        value={values.seatingCapacity.toString()}
                                        placeholder="Enter seating capacity"
                                        keyboardType="numeric"
                                    />
                                    {errors.seatingCapacity && touched.seatingCapacity && (
                                        <Text style={styles.error}>{errors.seatingCapacity}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Body Color</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('bodyColor')}
                                        value={values.bodyColor.toString()}
                                        placeholder="Enter body color"
                                    />
                                    {errors.bodyColor && touched.bodyColor && (
                                        <Text style={styles.error}>{errors.bodyColor}</Text>
                                    )}
                                </View>

                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Between Cities</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('betweenCitites')}
                                        value={values.betweenCitites.toString()}
                                        placeholder="Enter between citites"

                                    />
                                    {errors.betweenCitites && touched.betweenCitites && (
                                        <Text style={styles.error}>{errors.betweenCitites}</Text>
                                    )}
                                </View>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Registration City</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('registrationCity')}
                                        value={values.registrationCity.toString()}
                                        placeholder="Enter registration city"

                                    />
                                    {errors.registrationCity && touched.registrationCity && (
                                        <Text style={styles.error}>{errors.registrationCity}</Text>
                                    )}
                                </View>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Pickup city</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('pickupCity')}
                                        value={values.pickupCity.toString()}
                                        placeholder="Enter pickup city"

                                    />
                                    {errors.pickupCity && touched.pickupCity && (
                                        <Text style={styles.error}>{errors.pickupCity}</Text>
                                    )}
                                </View>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Driver Availability</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('driverAvailability')}
                                        value={values.driverAvailability.toString()}
                                        placeholder="Enter driver availability"

                                    />
                                    {errors.driverAvailability && touched.driverAvailability && (
                                        <Text style={styles.error}>{errors.driverAvailability}</Text>
                                    )}
                                </View>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Car Mileage (km)</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carMileage')}
                                        value={values.carMileage.toString()}
                                        placeholder="Enter car mileage"
                                        keyboardType='numeric'

                                    />
                                    {errors.carMileage && touched.carMileage && (
                                        <Text style={styles.error}>{errors.carMileage}</Text>
                                    )}
                                </View>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>car rents (RS)</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('carRents')}
                                        value={values.carRents.toString()}
                                        placeholder="Enter car rents"
                                        keyboardType='numeric'

                                    />
                                    {errors.carRents && touched.carRents && (
                                        <Text style={styles.error}>{errors.carRents}</Text>
                                    )}
                                </View>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>Insured</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('insured')}
                                        value={values.insured.toString()}
                                        placeholder="Enter insured"

                                    />
                                    {errors.insured && touched.insured && (
                                        <Text style={styles.error}>{errors.insured}</Text>
                                    )}
                                </View>
                                <View style={styles.fieldContainer}>
                                    <Text style={styles.label}>descriptions</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={handleChange('descriptions')}
                                        value={values.descriptions.toString()}
                                        placeholder="Enter descriptions"

                                    />
                                    {errors.descriptions && touched.descriptions && (
                                        <Text style={styles.error}>{errors.descriptions}</Text>
                                    )}
                                </View>

                                {/* Add more fields here if needed */}

                                <Button
                                    title="Submit"
                                    onPress={(values)=>console.log(`values ${values} \n is valid ${isValid}`)}
                                    disabled={false}
                                />
                                {/* ToucableOpacity */}
                                {/* <MainButton title="Submit" onPress={handleSubmit}
                                    // disabled={ values.carMake && values.carModel && values.carYear && values.carAssembly && values.carVariant && values.carTransmission && values.carType && values.engineType && values.enginceCapacity && values.seatingCapacity && values.bodyColor && values.betweenCitites && values.registrationCity && values.pickupCity && values.driverAvailability && values.carMileage && values.carRents && values.insured && values.descriptions} 
                                    disabled={!isValid || !dirty}
                                /> */}

                            </>
                        )}
                    </Formik>
                )}
            />

        </View>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        // marginBottom:100,
        backgroundColor: '#fff',
    },
    fieldContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
    },
});

export default UploadCarDetailesScreen;
