import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Task = (props) => {
  const {number} = props;
  const item = number % 2 === 0 ? styles.item1 : styles.item;
  const icon = number % 2 === 0 ? styles.icon1 : styles.icon;
  const content = number % 2 === 0 ? styles.content1 : styles.content;
  const text = number % 2 === 0 ? styles.text1 : styles.text;

  return (
    <View style = {item}>
            <View>
                <Image style = {icon} source={require('./icon2.jpg')} />
            </View>
            <View style = {content}>
                <Text style = {text}>{props.title}</Text>
            </View>
    </View>
  )
}

export default Task;