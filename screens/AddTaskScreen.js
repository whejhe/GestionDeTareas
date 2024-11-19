import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';

export default function AddTaskScreen({ navigation }) {
    const taskSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        description: Yup.string().required('Description is required'),
    });

    const saveTask = async (task) => {
        try {
            const storedTasks = await AsyncStorage.getItem('tasks');
            const currentTasks = storedTasks ? JSON.parse(storedTasks) : [];
            const updatedTasks = [...currentTasks, task];
            await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));

            // Notifica que una nueva tarea fue añadida y regresa a la pantalla principal
            navigation.navigate('Home', { newTaskAdded: true });
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    return (
        <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={taskSchema}
            onSubmit={(values, { resetForm }) => {
                saveTask(values);
                resetForm(); // Limpia los campos después de guardar
            }}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View style={styles.container}>
                    <TextInput
                        placeholder="Task Title"
                        onChangeText={handleChange('title')}
                        value={values.title}
                        style={styles.input}
                    />
                    {errors.title && <Text style={styles.error}>{errors.title}</Text>}
                    <TextInput
                        placeholder="Task Description"
                        onChangeText={handleChange('description')}
                        value={values.description}
                        style={styles.input}
                    />
                    {errors.description && <Text style={styles.error}>{errors.description}</Text>}
                    <Button title="Add Task" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: { padding: 10 },
    input: { borderWidth: 1, padding: 10, marginBottom: 5, borderRadius: 5 },
    error: { color: 'red', marginBottom: 5 },
});
