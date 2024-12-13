import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


// Konfiguration af Google Sign-In
GoogleSignin.configure({
    webClientId: '147933906622-vccevsj9remeels3ukhmpfafqui1mpqh.apps.googleusercontent.com',
});

const googleHandlerLogin = async () => {
    try {
        // Kontroller, om enheden understøtter Google Play Services
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

        // Log brugeren ind og få brugerinfo
        const userInfo: any = await GoogleSignin.signIn();

        // Tjek, om idToken findes
        const idToken = userInfo.idToken;
        if (!idToken) {
            throw new Error('No ID token found in Google Sign-In response');
        }

        // Opret Google-kredentialer
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Log brugeren ind via Firebase
        return auth().signInWithCredential(googleCredential);
    } catch (error) {
        console.error('Google Sign-In Error:', error);
        throw error;
    }
};

export default googleHandlerLogin;
