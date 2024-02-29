
// ClientComponent.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ClientComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/data');
      const jsonData = await response.json();
      setData(jsonData.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{data ? data : 'Loading...'}</Text>
    </View>
  );
};

export default ClientComponent;

/* import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import io from 'socket.io-client';

const SERVER_URL = 'http://192.168.1.63:5000'; // Replace with your server IP address

const SocketIOClient = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const newSocket = io(SERVER_URL);
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on('response', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off('response');
    };
  }, [socket]);

  const sendMessage = () => {
    if (!socket || !inputMessage.trim()) return;

    socket.emit('message', inputMessage.trim());
    console.log(inputMessage);
    setInputMessage('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <ScrollView style={{ marginBottom: 20 }}>
        {messages.map((message, index) => (
          <Text key={index}>{message}</Text>
        ))}
      </ScrollView>
      <TextInput
        style={{ width: '80%', borderWidth: 1, padding: 10, marginBottom: 10 }}
        value={inputMessage}
        onChangeText={(text) => setInputMessage(text)}
        placeholder="Type your message here..."
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default SocketIOClient;
 */