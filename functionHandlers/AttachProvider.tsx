import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

/**
 * AttachProvider is a React functional component that provides image selection functionality
 * using the device's image library. It allows users to pick an image and triggers a callback
 * with the selected image's URI.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {function(string): void} props.onImageSelected - A callback function invoked when
 * an image is selected. The function receives the URI of the selected image as an argument.
 *
 * @returns {Object} - Returns an object containing the `addImage` function, which can be
 * called to launch the image library for image selection.
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

    return {addImage};
};

export default AttachProvider;
