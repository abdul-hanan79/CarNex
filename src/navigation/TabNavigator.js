/* eslint-disable prettier/prettier */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import MessageScreen from '../screens/MessageScreen';
import HelpScreen from '../screens/HelpScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeadset, faHouse, faMessage, faSearch, faSquarePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native'
import SearchScreen from '../screens/SearchScreen';
import SearchTabBarIcon from '../components/SearchTabBarIcon/SearchTabBarIcon';
import UploadCarDetailsScreen from '../screens/UploadCarDetailsScreen';
import { colors } from '../colors';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            backBehavior='history'
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 15,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffff',
                    borderRadius: 15,
                    height: 70,
                    ...style.shadow,
                },
                headerStyle: {
                    backgroundColor: 'transparent',
                },
                headerTitleStyle: {
                    fontSize: 36,
                    fontWeight: 'bold',

                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarBadge: 3,
                    tabBarIcon: ({ color, size }) => (
                        // <MaterialCommunityIcons name="home" color={color} size={size} />\
                        <FontAwesomeIcon icon={faHouse} size={26} color={color} />
                    ),
                    headerTitle: 'Home',
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerTitleStyle: {
                        fontSize: 36,
                        fontWeight: 'bold',

                    }
                }}
            />
            <Tab.Screen
                name="Add"
                component={UploadCarDetailsScreen}
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color, size }) => (
                        // <MaterialCommunityIcons name="home" color={color} size={size} />\
                        <FontAwesomeIcon icon={faSquarePlus} size={26} color={color} />
                    ),
                    headerTitle: 'Home',
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: 'SearchScreen',
                    tabBarIcon: ({ color, size }) => (
                        <SearchTabBarIcon>
                            <FontAwesomeIcon icon={faSearch} size={26} color="#fff" />
                        </SearchTabBarIcon>
                    ),
                    headerTitle: 'Search',

                }}
            />
            <Tab.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faMessage} size={26} color={color} />

                    ),
                    tabBarBadge: 3,
                    headerTitle: 'Message',

                }}
            />
            <Tab.Screen
                name="Help"
                component={HelpScreen}
                options={{
                    tabBarLabel: 'Help',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesomeIcon icon={faHeadset} size={26} color={color} />

                    ),
                    headerTitle: 'Help',

                }}
            />
        </Tab.Navigator>
    );
}
const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default TabNavigator;