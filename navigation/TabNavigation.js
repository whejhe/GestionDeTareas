import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tasks" component={HomeScreen} />
            <Tab.Screen name="Add Task" component={AddTaskScreen} />
        </Tab.Navigator>
    );
}
