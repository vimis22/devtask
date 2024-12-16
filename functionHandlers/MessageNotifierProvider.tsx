import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

const rooms = [
    {id: '1', room: 'Room 1', receiver: 'Vivek Misra'},
    {id: '2', room: 'Room 2', receiver: 'Henrik Stærkær'},
    {id: '3', room: 'Room 3', receiver: 'Gert Lavsen'},
];

const MessageNotifierProvider: React.FC<{ onEnable: () => void; onDisable: () => void }> = ({ onEnable, onDisable }) => (
    <Modal visible animationType="slide" transparent>
        <View style={styles.modalBackground}>
            <View style={styles.notificationsContainer}>
                <Text style={styles.notificationsTitle}>Notifications</Text>
                <FlatList
                    data={rooms}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.notificationsContent}>
                            <Text style={styles.notificationsText}>
                                Notification from {item.receiver} in {item.room}
                            </Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={[styles.button, styles.enable]} onPress={onEnable}>
                                    <Text style={styles.buttonText}>Enable</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button, styles.disable]} onPress={onDisable}>
                                    <Text style={styles.buttonText}>Disable</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    notificationsContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
    },
    notificationsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    notificationsContent: {
        marginBottom: 20,
    },
    notificationsText: {
        fontSize: 16,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    enable: {
        backgroundColor: '#009930',
    },
    disable: {
        backgroundColor: '#ff0000',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default MessageNotifierProvider;
