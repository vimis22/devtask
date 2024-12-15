import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import {useState} from "react";
import AttachProvider from '../functionHandlers/AttachProvider.tsx';

const mockMessages = [
    {id: '1', sender: 'Vivek Misra', date: new Date().toISOString(), content: 'Message 1', icon: 'V', reciever: 'Henrik'},
    {id: '2', sender: 'Henrik Stærkær', date: new Date().toISOString(), content: 'Message 2', icon: 'H', reciever: 'Vivek'},
];
const ChatPage = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(mockMessages);

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
            setMessages([...messages, {id: '3', sender: 'Vivek', date: new Date().toISOString(), content: message, icon: 'V', reciever: 'Henrik'}]);
            setMessage('');
        }
    };
    const renderMessageContainer = ({item}: any) => (
        <View style={styles.messageContainer}>
            <Text style={styles.profileIcon}>{item.icon}</Text>
            <View style={styles.messageContent}>
                <Text style={styles.messageTime}>{item.sender} {item.date}</Text>
                <Text style={styles.messageText}>{item.content}</Text>
                <Text style={styles.messagePersonInfo}>Read by {item.reciever}</Text>
            </View>
        </View>
    );
    return (
        <View style={styles.pageContainer}>
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
