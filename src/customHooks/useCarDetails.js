/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const useCarDetails = () => {
    const data = [
        {
            "carName": "Range Rover",
            "price": "1200",
            "location": "Faisalabad",
            "gearType": "auto",
            "carImage": "https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg",
            "variant": "Range Rover Sport SVR",
            "driverAvailability": "only with driver",
            "seats": 7,
            "owner": "Abdul Hanan",
            "description": "This is my car"
        },
        {
            "carName": "Toyota Corolla",
            "price": "800",
            "location": "Lahore",
            "gearType": "auto",
            "carImage": "https://example.com/toyota-corolla.jpg",
            "variant": "GLi",
            "driverAvailability": "with driver",
            "seats": 5,
            "owner": "Ali Khan",
            "description": "Well-maintained family car"
        },
        {
            "carName": "Honda Civic",
            "price": "900",
            "location": "Karachi",
            "gearType": "auto",
            "carImage": "https://example.com/honda-civic.jpg",
            "variant": "VTi Oriel",
            "driverAvailability": "without driver",
            "seats": 5,
            "owner": "Sara Ahmed",
            "description": "Comfortable and reliable"
        },
        {
            "carName": "BMW X5",
            "price": "1500",
            "location": "Islamabad",
            "gearType": "auto",
            "carImage": "https://example.com/bmw-x5.jpg",
            "variant": "xDrive40i",
            "driverAvailability": "with driver",
            "seats": 5,
            "owner": "Usman Khan",
            "description": "Luxury SUV with great performance"
        },
        {
            "carName": "Kia Sportage",
            "price": "700",
            "location": "Rawalpindi",
            "gearType": "auto",
            "carImage": "https://example.com/kia-sportage.jpg",
            "variant": "EX",
            "driverAvailability": "without driver",
            "seats": 5,
            "owner": "Ayesha Mahmood",
            "description": "Spacious and fuel-efficient"
        },
        {
            "carName": "Hyundai Elantra",
            "price": "600",
            "location": "Multan",
            "gearType": "auto",
            "carImage": "https://example.com/hyundai-elantra.jpg",
            "variant": "SE",
            "driverAvailability": "only with driver",
            "seats": 5,
            "owner": "Hassan Ali",
            "description": "Affordable and reliable sedan"
        },
        {
            "carName": "Mercedes-Benz C-Class",
            "price": "1800",
            "location": "Peshawar",
            "gearType": "auto",
            "carImage": "https://example.com/mercedes-c-class.jpg",
            "variant": "C300",
            "driverAvailability": "with driver",
            "seats": 5,
            "owner": "Zara Khan",
            "description": "Elegant and luxurious"
        },
        {
            "carName": "Nissan X-Trail",
            "price": "1000",
            "location": "Quetta",
            "gearType": "auto",
            "carImage": "https://example.com/nissan-x-trail.jpg",
            "variant": "ST-L",
            "driverAvailability": "without driver",
            "seats": 5,
            "owner": "Tariq Mahmood",
            "description": "Ideal for adventurous trips"
        },
        {
            "carName": "Audi A4",
            "price": "1600",
            "location": "Sialkot",
            "gearType": "auto",
            "carImage": "https://example.com/audi-a4.jpg",
            "variant": "Premium Plus",
            "driverAvailability": "only with driver",
            "seats": 5,
            "owner": "Nida Ali",
            "description": "Powerful and sophisticated"
        },
        {
            "carName": "Toyota Fortuner",
            "price": "1400",
            "location": "Gujranwala",
            "gearType": "auto",
            "carImage": "https://example.com/toyota-fortuner.jpg",
            "variant": "Sigma 4",
            "driverAvailability": "with driver",
            "seats": 7,
            "owner": "Ahmed Khan",
            "description": "Robust and comfortable SUV"
        },
        {
            "carName": "Suzuki Swift",
            "price": "500",
            "location": "Hyderabad",
            "gearType": "auto",
            "carImage": "https://example.com/suzuki-swift.jpg",
            "variant": "DLX",
            "driverAvailability": "without driver",
            "seats": 5,
            "owner": "Fatima Ali",
            "description": "Small and fuel-efficient hatchback"
        },
        {
            "carName": "Ford Mustang",
            "price": "2000",
            "location": "Sargodha",
            "gearType": "auto",
            "carImage": "https://example.com/ford-mustang.jpg",
            "variant": "GT Premium",
            "driverAvailability": "with driver",
            "seats": 4,
            "owner": "Sajid Khan",
            "description": "Iconic and high-performance sports car"
        },
        {
            "carName": "Chevrolet Camaro",
            "price": "1800",
            "location": "Sukkur",
            "gearType": "auto",
            "carImage": "https://example.com/chevrolet-camaro.jpg",
            "variant": "SS",
            "driverAvailability": "only with driver",
            "seats": 4,
            "owner": "Ahmed Ali",
            "description": "Muscular and thrilling ride"
        },
        {
            "carName": "Mazda CX-5",
            "price": "1100",
            "location": "Jhang",
            "gearType": "auto",
            "carImage": "https://example.com/mazda-cx-5.jpg",
            "variant": "Grand Touring",
            "driverAvailability": "without driver",
            "seats": 5,
            "owner": "Mehreen Ahmed",
            "description": "Stylish and practical SUV"
        },
        {
            "carName": "Volkswagen Golf",
            "price": "900",
            "location": "Mirpur Khas",
            "gearType": "auto",
            "carImage": "https://example.com/vw-golf.jpg",
            "variant": "Comfortline",
            "driverAvailability": "with driver",
            "seats": 5,
            "owner": "Imran Khan",
            "description": "Fun-to-drive and spacious hatchback"
        }
    ]

    return {
        data,
    }
}

export default useCarDetails

