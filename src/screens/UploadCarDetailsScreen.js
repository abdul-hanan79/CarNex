/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, ScrollView, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';
import useLogin from '../customHooks/useLogin';

const CarForm = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const { handleScreenPress } = useLogin();
    const [open3, setOpen3] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
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

            <TouchableWithoutFeedback onPress={handleScreenPress}>
                <KeyboardAvoidingView style={[styles.inputContainer]} behavior="padding" >

                    <FlatList
                        data={[1]} // Dummy data to enable scrolling
                        renderItem={() => (
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ values, handleChange, setFieldValue, errors, touched }) => (

                                    <View style={styles.container}>
                                        {/* ...other form fields */}

                                        <View style={[styles.fieldContainer,]}>
                                            <Text style={styles.label}>Car Model</Text>
                                            <DropDownPicker
                                                placeholder='Select the Car Model'
                                                // name="Car Model"
                                                // zIndex={10000}
                                                open={open1}
                                                setOpen={setOpen1}
                                                items={[
                                                    { label: 'Make 1', value: 'make1' },
                                                    { label: 'Make 2', value: 'make2' },
                                                    // Add more make options here
                                                ]}
                                                defaultValue={values.carModel}
                                                containerStyle={[styles.dropDownContainerStyle, { zIndex: open ? 1 : 0 }]}

                                                style={[styles.dropDownMenuStyle, { zIndex: open ? 1 : 0 }]}
                                                dropDownStyle={styles.dropDownContainer}
                                                onChangeItem={(item) => handleChange('carModel', item.value)}
                                                setValue={values.carModel}

                                            />
                                            {errors.carModel && touched.carModel && (
                                                <Text style={styles.error}>{errors.carModel}</Text>
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
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

        </View >
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
    dropDownContainer: { backgroundColor: '#3f3', fontSize: 28, },
    dropDownContainerStyle: { height: 70, marginBottom: 10, backgroundColor: 'red', },
    dropDownMenuStyle: { backgroundColor: '#eeee' }
}
export default CarForm;



