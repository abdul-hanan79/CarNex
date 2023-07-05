/* eslint-disable prettier/prettier */
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Tab } from "@rneui/base";
import HomeScreen from "../screens/HomeScreen";

const tab = createMaterialBottomTabNavigator();
export const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    )
};
