import React, {useContext, useState} from 'react';
import {LoginContext} from '../functionHandlers/LoginProvider';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import googleHandlerLogin from '../functionHandlers/GoogleHandlerLogin';
import facebookHandlerLogin from "../functionHandlers/FacebookHandlerLogin.tsx";

const LoginPage = ({ navigation }: any) => {
    const { login } = useContext(LoginContext) as { login: () => void };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        if (email === 'test@example.com' && password === 'password123') {
            login && login();
            navigation.navigate('RoomlistPage');
        } else {
            Alert.alert('Invalid credentials');
        }
    };
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.sectionTitle}>LOGIN</Text>

            <Text style={styles.textInputLabel}>USERID:</Text>

            <TextInput style={styles.inputFieldText}
                       placeholder={'Please enter your UserID'}
                       onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.textInputLabel}>PASSWORD:</Text>

            <TextInput style={styles.inputFieldText}
                       placeholder={'Please enter your Password'}
                       secureTextEntry={true}
                       onChangeText={(text) => setPassword(text)}
            />
            <Text style={styles.textInputLabel}>ADDITIONAL LOGIN:</Text>

            <View style={styles.additionalLoginContainer}>
                <Text style={styles.additionalLoginButtons} onPress={googleHandlerLogin}>GOOGLE</Text>
                <Text style={styles.additionalLoginButtons} onPress={facebookHandlerLogin}>FACEBOOK</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={loginHandler}>
                <Text style={styles.buttonText}>ENTER</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignupPage')}>
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
        marginBottom: 8,
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
    additionalLoginContainer: {
        flexDirection: 'row',
        gap: 80,
        marginLeft: 55,
        marginBottom: 10,
        marginTop: 8,
    },
    additionalLoginButtons: {
        backgroundColor: '#0078ff',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        color: 'white',
        fontWeight: '600',
    },
});

export default LoginPage;
