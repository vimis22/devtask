import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

/**
 * Handles user login through Facebook authentication.
 * This function uses Facebook's LoginManager to request permissions and authenticate the user.
 * If the login is successful, it retrieves the user's access token and logs them in using Firebase authentication.
 * Upon successful login, the user is navigated to the 'RoomlistPage'.
 * @link https://rnfirebase.io/auth/social-auth#facebook
 * @param {any} navigation - Navigation object to handle page transitions.
 * @async
 * @throws Will log an error message if the Facebook login or Firebase authentication fails.
 */
const facebookHandlerLogin = async (navigation: any) => {
    try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
            console.log('User cancelled Facebook login');
            return;
        }
        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            console.log('Something went wrong obtaining Facebook access token');
            return;
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        await auth().signInWithCredential(facebookCredential);
        navigation.replace('RoomlistPage');
    } catch (error) {
        console.error('Facebook Login Error:', error);
    }
};

export default facebookHandlerLogin;
