/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import useLogin from '../customHooks/useLogin';

const CarForm = () => {
    const [open, setOpen] = useState(false)
    const { handleScreenPress } = useLogin()
    const initialValues = {
        // ...other field values
        carMake: '',
        carModel: '',
        modelYear: '',
        // ...other field values
    };

    const validationSchema = Yup.object().shape({
        // ...other field validations
        carMake: Yup.string().required('Car make is required'),
        carModel: Yup.string().required('Car model is required'),
        modelYear: Yup.string().required('Model year is required'),
        // ...other field validations
    });

    const handleSubmit = (values) => {
        // Handle form submission
        console.log(values);
    };

    return (
        <View style={[styles.container, { backgroundColor: 'white' }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TouchableWithoutFeedback onPress={handleScreenPress}>
                    <KeyboardAvoidingView style={[styles.inputContainer]} behavior="padding" >
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, handleChange, handleSubmit, errors, touched }) => (
                                <View style={styles.container}>
                                    {/* ...other form fields */}

                                    <View style={styles.fieldContainer}>
                                        <Text style={styles.label}>Car Make</Text>
                                        <DropDownPicker
                                        open={open}
                                        setOpen={setOpen}
                                            items={[
                                                { label: 'Make 1', value: 'make1' },
                                                { label: 'Make 2', value: 'make2' },
                                                // Add more make options here
                                            ]}
                                            defaultValue={values.carMake}
                                            containerStyle={{ height: 40, marginBottom: 10 }}
                                            style={{ backgroundColor: '#fafafa' }}
                                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                                            onChangeItem={(item) => handleChange('carMake')(item.value)}
                                        />
                                        {errors.carMake && touched.carMake && (
                                            <Text style={styles.error}>{errors.carMake}</Text>
                                        )}
                                    </View>

                                    <View style={styles.fieldContainer}>
                                        <Text style={styles.label}>Car Model</Text>
                                        <DropDownPicker
                                            items={[
                                                { label: 'Model 1', value: 'model1' },
                                                { label: 'Model 2', value: 'model2' },
                                                // Add more model options here
                                            ]}
                                            defaultValue={values.carModel}
                                            containerStyle={{ height: 40, marginBottom: 10 }}
                                            style={{ backgroundColor: '#fafafa' }}
                                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                                            onChangeItem={(item) => handleChange('carModel')(item.value)}
                                        />
                                        {errors.carModel && touched.carModel && (
                                            <Text style={styles.error}>{errors.carModel}</Text>
                                        )}
                                    </View>

                                    <View style={styles.fieldContainer}>
                                        <Text style={styles.label}>Model Year</Text>
                                        <DropDownPicker
                                            items={[
                                                { label: 'Year 1', value: 'year1' },
                                                { label: 'Year 2', value: 'year2' },
                                                // Add more year options here
                                            ]}
                                            defaultValue={values.modelYear}
                                            containerStyle={{ height: 40, marginBottom: 10 }}
                                            style={{ backgroundColor: '#fafafa' }}
                                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                                            onChangeItem={(item) => handleChange('modelYear')(item.value)}
                                        />
                                        {errors.modelYear && touched.modelYear && (
                                            <Text style={styles.error}>{errors.modelYear}</Text>
                                        )}
                                    </View>

                                    {/* ...continue with other form fields */}

                                    {/* Submit Button */}
                                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                        <Text style={styles.buttonText}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                    </KeyboardAvoidingView>
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    fieldContainer: {
        flex: 1,
        marginBottom: 15,
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
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
}
export default CarForm;



