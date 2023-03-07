import { Text, View, ScrollView, Keyboard } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import Task from './components/Task';
import Form from './components/Form';
import styles from './App.Components.styles';

const API_URL = 'https://simpleqaapi.onrender.com/respone';
const MAX_TOKENS = 12;

export default function App() {

  const [message, setMessage] = useState(["Xin chào tôi là Chatbot. Tôi có thể giúp gì cho bạn."])

  useEffect(() => {
    message
  }, [])

  const handleOnRespone = async res => {
      setMessage([...message, res])
      await callApi(res);
  }

  const callApi = async value => {
    let res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({  
        sentence : value, 
        max_token : MAX_TOKENS
      }),
    });

    let data = await res.json();

    if (data) {
      let respone = data.result;
      message.push(value);
      setMessage([...message,respone]);
    }

  };


  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  let scroll = keyboardStatus == 'Keyboard Shown' ? styles.scroll : styles.sroll1;

  const scrollViewRef = useRef(null);

  return (
    <View style={styles.container}>

      <View style = {styles.body}>
          <Text style = {styles.header}>Chatbot</Text>
          <View style = {scroll}>
          <ScrollView ref={scrollViewRef} onContentSizeChange={() => {scrollViewRef.current?.scrollToEnd()}}>
                {
                  message.map((value, index) => {
                    return <Task key = {index} title = {value} number = {index + 1} />
                  })
                }
          </ScrollView>
        </View>
         
    </View>

    <Form onRespone = {handleOnRespone} />
      
    </View>
  );
}
