import React from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const AttachProvider = ({onImageSelected}: {onImageSelected: (imageUri: string) => void}) => {
    const addImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                quality: 1,
            },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    const selectedImage = response.assets[0].uri;
                    if (selectedImage) {
                        onImageSelected(selectedImage);
                    }
                }
            }
        );
    };

    const addCamera = () => {
        launchCamera(
            {
                mediaType: 'photo',
                quality: 1,
            },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    const capturedImage = response.assets[0].uri;
                    if (capturedImage) {
                        onImageSelected(capturedImage);
                    }
                }
            }
        );
    };

    return {addImage, addCamera};
};

export default AttachProvider;
