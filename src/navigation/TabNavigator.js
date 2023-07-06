/* eslint-disable prettier/prettier */
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import HelpScreen from "../screens/HelpScreen";
import MessageScreen from "../screens/MessageScreen";
import SearchScreen from "../screens/SearchScreen";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { colors } from "../colors";
import { faHouse, faMessage, faMagnifyingGlass, faUser, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" backBehavior="history"
            // activeColor={colors.lightColor}
            // inactiveColor="#3e2465"
            barStyle={{ backgroundColor: colors.lightColor, }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => (< FontAwesomeIcon icon={faHouse} size={26} color="black" />), }} />
            <Tab.Screen name="Help" component={HelpScreen} options={{ tabBarIcon: () => (< FontAwesomeIcon icon={faHeadset} size={26} color="black" />), }} />
            <Tab.Screen name="Message" component={MessageScreen} options={{ tabBarIcon: () => (< FontAwesomeIcon icon={faMessage} size={26} color="black" />), }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: () => (< FontAwesomeIcon icon={faMagnifyingGlass} size={26} color="black" />), }} />
            <Tab.Screen name="Add" component={HomeScreen} options={{ tabBarIcon: () => (< FontAwesomeIcon icon={faUser} size={26} color="black" />), }} />

        </Tab.Navigator>
    )
};
export default TabNavigator;