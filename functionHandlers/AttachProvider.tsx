import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

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

    return {addImage};
};

export default AttachProvider;
