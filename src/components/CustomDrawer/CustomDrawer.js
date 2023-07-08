/* eslint-disable prettier/prettier */
import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground source={require('../../assests/images/backgroundImageDrawer.jpeg')} style={{ padding: 20 }} />
                <Image source={require('../../assests/images/welcomeScreen.jpg')} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }} />
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row',alignItems:"center"}}>
                        <FontAwesomeIcon icon={faShare} size={15} />
                        <Text style={{fontSize:15,marginLeft:5}}>hello</Text>
                    </View>
                    <View style={{ flexDirection: 'row' ,alignItems:"center"}}>
                        <FontAwesomeIcon icon={faShare} size={15} />
                        <Text style={{fontSize:15,marginLeft:5}}>hello</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer