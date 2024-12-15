import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


GoogleSignin.configure({
    webClientId: '147933906622-vccevsj9remeels3ukhmpfafqui1mpqh.apps.googleusercontent.com',
});

const googleHandlerLogin = async () => {
    try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

        const userInfo: any = await GoogleSignin.signIn();

        const idToken = userInfo.idToken;
        if (!idToken) {
            throw new Error('No ID token found in Google Sign-In response');
        }

        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        return auth().signInWithCredential(googleCredential);
    } catch (error) {
        console.error('Google Sign-In Error:', error);
        throw error;
    }
};

export default googleHandlerLogin;
