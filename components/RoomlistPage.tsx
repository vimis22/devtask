import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {LoginContext} from '../functionHandlers/LoginProvider.tsx';
import MessageNotifierProvider from '../functionHandlers/MessageNotifierProvider.tsx';

/**
 * @link https://react.dev/reference/react/createContext#usage
 * Represents a list of rooms available for usage.
 * Each room object contains an ID, a name, and a description.
 *
 * @type {Array<Object>}
 * @property {string} id - The unique identifier of the room.
 * @property {string} name - The name of the room.
 * @property {string} description - A brief description of the room's purpose.
 */
const rooms = [
    {id: '1', name: 'Room 1', description: 'Conference Meetings'},
    {id: '2', name: 'Room 2', description: 'Conference Meetings'},
    {id: '3', name: 'Room 3', description: 'Conference Meetings'},
    {id: '4', name: 'Room 4', description: 'Conference Meetings'},
    {id: '5', name: 'Room 5', description: 'Conference Meetings'},
];

/**
 * RoomlistPage is a functional React component that displays a list of rooms,
 * enabling users to navigate to a specific chat page and manage notifications functionality.
 * It interacts with the LoginContext to render content conditionally based on the user's login state.
 *
 * Props:
 * - navigation: An object that provides navigation functionalities to navigate between screens.
 *
 * Contexts:
 * - LoginContext: Used to determine user login state and conditionally render the page content.
 *
 * State:
 * - notificationsEnabled: A boolean state that manages the visibility of the MessageNotifierProvider.
 *
 * Functions:
 * - enableNotificationsHandler: Disables notifications and logs an activation message.
 * - disableNotificationsHandler: Disables notifications and logs a deactivation message.
 * - showNotifications: Enables the visibility of the MessageNotifierProvider.
 *
 * Rendered Components:
 * - A FlatList to display the list of rooms, each containing group information and navigation to the chat screen.
 * - MessageNotifierProvider for managing notifications, displayed conditionally based on `notificationsEnabled` state.
 * - Recent groups section with a "RELOAD" button to trigger showNotifications.
 */
const RoomlistPage = ({navigation}: any) => {
    const loginContext = React.useContext(LoginContext);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    const enableNotificationsHandler = () => {
        console.log('Notifications enabled');
        setNotificationsEnabled(false);
    };

    const disableNotificationsHandler = () => {
        console.log('Notifications disabled');
        setNotificationsEnabled(false);
    };

    const showNotifications = () => {
        setNotificationsEnabled(true);
    };

    if (loginContext) {
        const renderRoomsContainer = ({item}: any) => (
            <View style={styles.groupInfoContainer}>
                <View style={styles.groupIcon} />
                <View style={styles.groupInformation}>
                    <Text style={styles.groupName}>{item.name}</Text>
                    <Text style={styles.groupDescription}>{item.description}</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('ChatPage')}
                >
                    <Text style={styles.buttonText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={styles.pageContainer}>
                {notificationsEnabled && (
                    <MessageNotifierProvider
                        onEnable={enableNotificationsHandler}
                        onDisable={disableNotificationsHandler}
                        navigation={navigation}
                    />
                )}

                <View style={styles.recentContainer}>
                    <Text style={styles.recentGroupsTitle}>
                        Recent:
                        <TouchableOpacity onPress={showNotifications}>
                            <Text style={styles.recentIcon}>{'RELOAD ⟳'}</Text>
                        </TouchableOpacity>
                    </Text>
                </View>

                <FlatList
                    data={rooms}
                    renderItem={renderRoomsContainer}
                    keyExtractor={(item) => item.id}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#330099',
    },
    recentGroupsTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
    },
    groupInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    groupIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'red',
        marginRight: 10,
    },
    groupInformation: {
        flex: 1,
    },
    groupName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    groupDescription: {
        color: 'grey',
    },
    buttonContainer: {
        backgroundColor: '#330099',
        borderRadius: 5,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    recentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    recentIcon: {
        color: 'black',
        fontSize: 15,
        height: 20,
        backgroundColor: '#ffc700',
        borderRadius: 5,
        marginLeft: 5,
    },
});

export default RoomlistPage;
