/* eslint-disable prettier/prettier */
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './Screens.styles';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import CarDetailsCard from '../components/CarDetailsCard/CarDetailsCard';

const HomeScreen = () => {
  return (
    <View style={[styles.container]}>

      <View>
        <Text style={[styles.title,]}>Get Your Ride!</Text>
        {/* Category Button */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ overflow: 'hidden' }}>
            <CategoryButton title="HeachBack" />
            <CategoryButton title="HeachBack" />
            <CategoryButton title="HeachBack" />
            <CategoryButton title="HeachBack" />
            <CategoryButton title="HeachBack" />
            <CategoryButton title="HeachBack" />
          </ScrollView>
        </View>
      </View>
      <View>
        <Text style={[styles.title]}>Featured Cars</Text>

        <View>
          <CarDetailsCard />
        </View>

      </View>

    </View>
  );
};

export default HomeScreen;