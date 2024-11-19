import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { fetchTasks } from '../services/api';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ navigation }) {

    useEffect(() => {
        const loadTasks = async () => {
            const response = await fetchTasks();
            setTasks(response.data.slice(0, 10));
        };
        loadTasks();
    }, []);

    const [tasks, setTasks] = useState([
        { id: '1', title: 'Task 1', description: 'Description 1' },
        { id: '2', title: 'Task 2', description: 'Description 2' },
    ]);

    const handleTaskPress = (task) => {
        navigation.navigate('Task Details', { task });
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TaskCard task={item} onPress={() => handleTaskPress(item)} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: '#fff' },
});
