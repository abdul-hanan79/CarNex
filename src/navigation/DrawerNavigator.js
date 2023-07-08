/* eslint-disable prettier/prettier */
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import HelpScreen from "../screens/HelpScreen";
import MessageScreen from "../screens/MessageScreen";
import UploadCarDetailsScreen from "../screens/UploadCarDetailsScreen";
import CustomDrawer from "../components/CustomDrawer/CustomDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -20,
                    fontSize: 15,

                }
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faUser} size={10} color={color} />) }} />
            <Drawer.Screen name="Help" component={HelpScreen} />
            <Drawer.Screen name="Message" component={MessageScreen} />
            <Drawer.Screen name="Upload" component={UploadCarDetailsScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;