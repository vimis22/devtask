import React from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

/**
 * AttachProvider is a functional component that provides functionality to attach images from the gallery or camera.
 *
 * @param {Object} props - The component's properties.
 * @param {Function} props.onImageSelected - A callback function that is invoked with the URI of the selected image.
 *                                            This function is called when either an image is selected from the gallery
 *                                            or captured using the camera.
 *
 * @returns {Object} - An object containing two functions:
 *                     1. `addImage`: Opens the device's image gallery for the user to select an image.
 *                     2. `addCamera`: Opens the device's camera for the user to capture an image.
 */
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
