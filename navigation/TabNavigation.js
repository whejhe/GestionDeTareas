import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                activeTintColor: '#e91e63',
                headerShown: false
            }}
        >
            <Tab.Screen name="Tasks" component={HomeScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Add Task" component={AddTaskScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
