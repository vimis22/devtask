import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const SplashPage = ({ navigation }: any) => {
    return (
        <TouchableOpacity style={styles.pageContainer} onPress={() => navigation.navigate('LoginPage')}>
            <Text style={styles.welcomeTitle}>Chentia</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#330099',
    },
    welcomeTitle: {
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'white',
    },
});

export default SplashPage;
