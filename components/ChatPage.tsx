import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useState} from 'react';
import AttachProvider from '../functionHandlers/AttachProvider.tsx';
import NotificationsProvider from '../functionHandlers/NotificationsProvider.tsx';

/**
 * An array of mock message objects representing sample message data.
 * Each object contains details about a single message including sender, receiver, date, content, and an icon.
 */
const mockMessages = [
    {id: '1', sender: 'Vivek Misra', date: new Date().toISOString(), content: 'Message 1', icon: 'V', reciever: 'Henrik'},
    {id: '2', sender: 'Henrik Stærkær', date: new Date().toISOString(), content: 'Message 2', icon: 'H', reciever: 'Vivek'},
];

/**
 * ChatPage component represents a chat interface in a React Native application.
 *
 * This component manages a real-time chat experience by providing the following functionalities:
 * - Displaying a list of messages.
 * - Sending text messages.
 * - Sending images as messages.
 * - Managing notifications state for the chat.
 *
 * The component uses React hooks to manage states such as messages, input message, and notification settings.
 * It also handles image attachment and sending messages through predefined handlers.
 *
 * Key functionalities include:
 * - Rendering a list of chat messages.
 * - Providing an input field for entering and sending text messages.
 * - Allowing image attachments using a camera button.
 * - Managing notification toggling through a NotificationsProvider.
 */
const ChatPage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(mockMessages);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const attachProvider = AttachProvider({
        onImageSelected: (imageUri) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: Date.now().toString(),
                    sender: 'Vivek',
                    date: new Date().toISOString(),
                    content: '',
                    icon: 'V',
                    reciever: 'Henrik',
                    image: imageUri,
                },
            ]);
        },
    });
    const sendMessage = () => {
        if (message.trim()){
            setMessages([...messages,
                {id: '3',
                sender: 'Vivek',
                date: new Date().toISOString(),
                content: message,
                icon: 'V',
                reciever: 'Henrik'}]);
            setMessage('');
        }
    };

    const enableNotificationsHandler = () => {
        console.log('Notifications enabled');
        setNotificationsEnabled(false);
    };

    const disableNotificationsHandler = () => {
        console.log('Notifications disabled');
        setNotificationsEnabled(false);
    };

    const renderMessageContainer = ({item}: any) => (
        <View style={styles.messageContainer}>
            <Text style={styles.profileIcon}>{item.icon}</Text>
            <View style={styles.messageContent}>
                <Text style={styles.messageTime}>{item.sender} {item.date}</Text>
                {item.content ? (
                    <Text style={styles.messageText}>{item.content}</Text>

                ) : null}
                {item.image ? (
                    <Image style={styles.messageImage}
                           source={{uri: item.image}}
                           resizeMode={'contain'}
                    />
                ) : null}
                <Text style={styles.messagePersonInfo}>Read by {item.reciever}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.pageContainer}>
            {notificationsEnabled && (
                <NotificationsProvider
                    onEnable={enableNotificationsHandler}
                    onDisable={disableNotificationsHandler}
                />
            )}

            <FlatList
                data={messages}
                renderItem={renderMessageContainer}
                keyExtractor={item => item.id}
                style={styles.messageListContainer}/>
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.cameraButtonContainer}
                    onPress={attachProvider.addImage}
                >
                    <Text style={styles.buttonText}>{'📷'}</Text>
                </TouchableOpacity>
                <TextInput style={styles.inputFieldText}
                           value={message}
                           onChangeText={(text) => setMessage(text)}
                           placeholder={'Enter your message'}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={sendMessage}>
                    <Text style={styles.buttonText}>✔</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#330099',
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    profileIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#00d8ff',
        marginRight: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 'bold',
    },
    messageContent: {
        flex: 1,
    },
    messageTime: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
    messageText: {
        marginBottom: 5,
        color: 'black',
        backgroundColor: '#e6e6e6',
        borderRadius: 5,
        padding: 10,
    },
    messageImage: {
        width: '100%',
        height: 200,
        marginBottom: 5,
        borderRadius: 5,
    },
    messagePersonInfo: {
        color: 'white',
        marginBottom: 15,
    },
    messageListContainer: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#CCCCCC',
    },
    inputFieldText: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
    },
    buttonContainer: {
        marginLeft: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    cameraButtonContainer: {
        marginRight: 10,
        backgroundColor: '#ffc700',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ChatPage;
