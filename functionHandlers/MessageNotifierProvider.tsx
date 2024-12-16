import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const rooms = [
    {id: '1', room: 'Room 1', reciever: 'Vivek Misra'},
    {id: '2', name: 'Room 2', reciever: 'Henrik Stærkær'},
];
const MessageNotifierProvider = ({onEnable, onDisable}: {onEnable: () => void; onDisable: () => void}) => {
    return(
        <Modal visible={true} animationType="slide" transparent={true}>
            <View style={styles.notificationsContainer}>
                <View style={styles.notificationsContent}>
                    <Text style={styles.notificationsTitle}>Notification</Text>
                    <Text style={styles.notificationsText}>You have recieved a notification from {item.reciever} in {item.room}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.buttonContent, styles.enable]} onPress={onEnable}>
                            <Text>Enable</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buttonContent, styles.disable]} onPress={onDisable}>
                            <Text>Disable</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    notificationsContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        height: '18%',
    },
    notificationsContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    notificationsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    notificationsText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    buttonContent: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 5,
        color: 'white',
        fontWeight: 'bold',
    },
    enable: {
        backgroundColor: '#009930',
    },
    disable: {
        backgroundColor: '#ff0000',
    },
});

export default MessageNotifierProvider;
