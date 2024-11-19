import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TaskCard({ task, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: { padding: 10, marginVertical: 5, backgroundColor: '#f9f9f9', borderRadius: 5 },
    title: { fontWeight: 'bold', fontSize: 16 },
    description: { color: '#666' },
});
