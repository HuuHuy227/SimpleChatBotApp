import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import styles from './style'

const Form = (props) => {
    const [text, setText] = useState('')
    const handleSend = () => {
        if (text.length === 0) {
            alert("Please fill in your message!!")
            return false
        }
        props.onRespone(text)
        setText('')
    }

  return (
    <View style = {styles.Chat}>
      <TextInput 
        value = {text}
        placeholder = "Type a message to Chatbot" 
        style = {styles.Input}
        onChangeText={(text) => setText(text)}
      />

      
    <TouchableOpacity
        onPress={handleSend}
    >
    <View style = {styles.iconWrapper}>
        <FontAwesome name = "send" style = {styles.icon}></FontAwesome>
      </View>
    </TouchableOpacity>
      
    </View>
  )
}

export default Form;
