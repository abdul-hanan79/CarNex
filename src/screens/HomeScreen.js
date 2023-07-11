/* eslint-disable prettier/prettier */
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './Screens.styles';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import CarDetailsCard from '../components/CarDetailsCard/CarDetailsCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ ...styles.container, }}>
      <ScrollView>
        <View>
          <Text style={[styles.title,]}>Get Your Ride!</Text>
          {/* Category Button */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ overflow: 'hidden' }}>
              <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <CategoryButton title="HeachBack" />
              </TouchableOpacity>
              <CategoryButton title="HeachBack" />
            </ScrollView>
          </View>
        </View>
        {/* CARD SECTION */}
        <View>
          <Text style={[styles.title]}>Featured Cars</Text>

          <View style={{ flexWrap: 'wrap', gap: 10 }}>
            <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="Auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" />
            <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="Auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" />
            {/* <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" />
            <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" />
            <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" />
            <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" />
            <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" />
            <CarDetailsCard carName="Range Rover" price="1200" location="Faisalbad" gearType="auto" carImage="https://img.etimg.com/thumb/msid-69429504,width-1070,height-580,imgsize-586493,overlay-etpanache/photo.jpg" variant="Range Rover Sport SVR" /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;