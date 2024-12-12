import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const LoginPage = ({ navigation }: any) => {
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.sectionTitle}>LOGIN</Text>
            <Text style={styles.textInputLabel}>USERID:</Text>
            <TextInput style={styles.inputFieldText} placeholder={'Please enter your UserID'}/>
            <Text style={styles.textInputLabel}>PASSWORD:</Text>
            <TextInput style={styles.inputFieldText} placeholder={'Please enter your Password'} secureTextEntry={true}/>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('RoomlistPage')}>
                <Text style={styles.buttonText}>ENTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={styles.buttonText}>Don't have an Account? Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#330099',
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    textInputLabel: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
    },
    inputFieldText: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        marginBottom: 5,
    },
    buttonContainer: {
        backgroundColor: '#009930',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: '600',
        color: 'white',
    },
    signupLink: {
        textAlign: 'center',
        color: 'white',
        marginTop: 15,
        textDecorationLine: 'underline',
    },
});

export default LoginPage;
