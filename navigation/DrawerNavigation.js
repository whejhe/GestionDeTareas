import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigation from "./TabNavigation";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{ 
                activeTintColor: "#e91e63" 
            }}
        >
            <Drawer.Screen name="Home" component={TabNavigation} 
                options={{ drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />) }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen}
                options={{ drawerIcon: ({ color, size }) => (<MaterialCommunityIcons name="cog" color={color} size={size} />) }} 
            />
        </Drawer.Navigator>
    );
}
