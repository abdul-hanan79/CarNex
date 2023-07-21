/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
// import mainStyles from './Screens.styles';
// import CarDetailsCard from '../components/CarDetailsCard/CarDetailsCard';
// import CategoryButton from '../components/CategoryButton/CategoryButton';
// import useCarDetails from '../customHooks/useCarDetails';

// // Your existing code for CarDetailsCard, CategoryButton, and styles



// const HomeScreen = ({ navigation }) => {
//   const { data } = useCarDetails()
//   const renderHeader = () => {
//     return (
//       <View>
//         <Text style={[mainStyles.title]}>Get Your Ride!</Text>
//         {/* Category Button */}
//         <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
//           {/* Replace with your actual category buttons */}
//           <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <CategoryButton title="HeachBack" />
//           </TouchableOpacity>
//           <CategoryButton title="HeachBack" />
//         </View>
//       </View>
//     );
//   };

//   const renderCarDetailsCard = ({ item }) => {
//     return (
//       <View>

//         <CarDetailsCard
//           carName={item.carName}
//           price={item.price}
//           location={item.location}
//           gearType={item.gearType}
//           carImage={item.carImage}
//           variant={item.variant}
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={[mainStyles.container, { backgroundColor: 'red' }]}>
//         <Text style={[mainStyles.title]}>Featured Cars</Text>

//       <FlatList
//         data={data}
//         renderItem={renderCarDetailsCard}
//         keyExtractor={item => item.id}
//         ListHeaderComponent={renderHeader}
//       />
//     </View>
//   );
// };

// export default HomeScreen;


// /* eslint-disable prettier/prettier */
import { View, Text, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Screens.styles';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import CarDetailsCard from '../components/CarDetailsCard/CarDetailsCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useCarDetails from '../customHooks/useCarDetails';

const HomeScreen = ({ navigation }) => {
  const { data } = useCarDetails();
  // console.log("data ",data)
  return (
    <View style={{ ...styles.container, }}>
      <FlatList data={[1]} renderItem={() => (<View>
        <View>
          <Text style={[styles.title,]}>Get Your Ride!</Text>
          {/* Category Button */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ overflow: 'hidden' }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <CategoryButton title="HeachBack" />
              </TouchableOpacity>
              <CategoryButton title="HeachBack" />
            </ScrollView>
          </View>
        </View>
        {/* CARD SECTION */}
        <View>
          <Text style={[styles.title]}>Featured Cars</Text>

          <View style={{ flexWrap: 'wrap', gap: 20, flex: 1 }}>
            <SafeAreaView>
              <FlatList data={data} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('SingleCarDetail', item)}>
                  <CarDetailsCard carName={item.carName} price={item.price} location={item.location} gearType={item.gearType} carImage={item.carImage} variant={item.variant} />
                </TouchableOpacity>
              )}
                nestedScrollEnabled={true}
                keyExtractor={item => item.id}
              >
              </FlatList>
            </SafeAreaView>
          </View>
        </View>
      </View>)} >



      </FlatList>

    </View>
  );
};

export default HomeScreen;