import React from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

const rooms = [
    {id: '1', room: 'Room 1', receiver: 'Vivek Misra'},
    {id: '2', room: 'Room 2', receiver: 'Henrik Stærkær'},
    {id: '3', room: 'Room 3', receiver: 'Gert Lavsen'},
];

const MessageNotifierProvider: React.FC<{
    onEnable: () => void;
    onDisable: () => void;
    navigation: any; // Tilføj navigation som prop
}> = ({onEnable, onDisable, navigation}) => (
    <Modal visible={true} animationType="slide" transparent={true}>
        <View style={styles.notificationsContainer}>
            <View style={styles.notificationsContent}>
                <Text style={styles.notificationsTitle}>Message Notification</Text>
                <FlatList
                    data={rooms}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View>
                            <Text style={styles.notificationsText}>
                                You have received a notification from {item.receiver} in {item.room}.
                            </Text>
                        </View>
                    )}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.buttonContent, styles.enable]}
                        onPress={() => {onEnable(); navigation.navigate('ChatPage');}}>
                        <Text>Enable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonContent, styles.disable]}
                        onPress={onDisable}
                    >
                        <Text>Disable</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
);

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
