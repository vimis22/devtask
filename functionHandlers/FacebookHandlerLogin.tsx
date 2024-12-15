import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';
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
