import {View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const ChatPage = () => {
    const messages = [
        {id: '1', sender: 'Vivek', date: new Date().toISOString(), content: 'Message 1', icon: 'V'},
        {id: '2', sender: 'Henrik', date: new Date().toISOString(), content: 'Message 2', icon: 'H'},
    ];

    const renderMessageContainer = ({item}: any) => (
        <View style={styles.messageContainer}>
            <Text style={styles.profileIcon}>{item.icon}</Text>
            <View style={styles.messageContent}>
                <Text style={styles.messageTime}>{item.date}</Text>
                <Text style={styles.messageText}>{item.content}</Text>
                <Text style={styles.messagePersonInfo}>Read by {item.sender}</Text>
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
                <TextInput style={styles.inputFieldText}/>
                <TouchableOpacity style={styles.buttonContainer}>
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
        backgroundColor: '#cfad00',
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
});

export default ChatPage;
