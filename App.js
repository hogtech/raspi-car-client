/* 
// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import io from 'socket.io-client';

export default function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const socket = io('http://192.168.1.63:5000'); // Replace with your backend IP

  // useEffect to handle socket connection and disconnection
  useEffect(() => {
    console.log('Attempting to connect to server...');
    
    // Handle connection to the server
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    
    // Handle disconnection from the server
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Clean up function to disconnect socket when component unmounts
    return () => {
      socket.disconnect();
      console.log('Disconnected from server');
    };
  }, []);

  // useEffect to handle response from the server
  useEffect(() => {
    socket.on('response', (data) => {
      //This throws an error, disabled
      //setResponse(data);
    });

    // Clean up function to disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to send message to the server
  const sendMessage = () => {
    socket.emit('message', message);
    console.log(message)
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter message"
      />
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
      <Text style={styles.response}>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  response: {
    marginTop: 20,
  },
}); */

// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import io from 'socket.io-client';

export default function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const socket = io('http://192.168.1.63:5000'); // Replace with your backend IP
  useEffect(() => {
    console.log('Attempting to connect to server...');
    socket.on('connect', () => {
      console.log('Connected to server');
    });
  
    socket.on('response', (data) => {
      console.log('Received response:', data);
      setResponse(data);
    });
  
    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  
    return () => {
      socket.disconnect();
      console.log('Disconnected from server');
    };
  }, []);
  useEffect(() => {
    socket.on('response', (data) => {
      setResponse(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', message);
    console.log(message)
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Enter message"
      />
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
      <Text style={styles.response}>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  response: {
    marginTop: 20,
  },
});

/* ClientComponent.js
/* import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const ClientComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.63:5000/data');
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

export default ClientComponent; */