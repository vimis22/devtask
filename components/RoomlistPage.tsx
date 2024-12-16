import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {LoginContext} from '../functionHandlers/LoginProvider.tsx';
import MessageNotifierProvider from '../functionHandlers/NotificationsProvider.tsx';

const rooms = [
    {id: '1', name: 'Room 1', description: 'Conference Meetings'},
    {id: '2', name: 'Room 2', description: 'Conference Meetings'},
    {id: '3', name: 'Room 3', description: 'Conference Meetings'},
    {id: '4', name: 'Room 4', description: 'Conference Meetings'},
    {id: '5', name: 'Room 5', description: 'Conference Meetings'},
];

const RoomlistPage = ({navigation}: any) => {
    const loginContext = React.useContext(LoginContext);
    const [notificationsEnabled, setNotificationsEnabled] = useState(false); // Start med at være skjult

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

                {/* Liste over rum */}
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
