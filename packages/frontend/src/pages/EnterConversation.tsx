import React from 'react'
import { View } from 'react-native'
import { ConversationView } from '../components/ConversationView'
import { Header } from '../fragments/header'
import { styles } from '../fragments/mainViewStyles'
import { useState } from 'react';

var count = 1;

export const EnterConversation = () => {
    const [conversation, setConversation] = useState([]);
    const addText = ({message, person} : {message:string, person:number}) => {
        const prev = conversation;
        const newMessage = {message: {message}, person:{person}}
        setConversation(prev => [...prev, newMessage]);
    }

    console.log("?A QUE HORA ES?");
    if (count == 1) {console.log("HEY LISTEN!"); setConversation([{message: "penis penis penis penis!", person:0}, {message: "penis penis penis penis1", person:1}]); count++;} else {console.log("NVM DONE LISTENING")}
        return (
            <View style={styles.flexPage}>
                <Header title={"Enter a Conversation"} size={"h3"}/>
                <ConversationView conversation = {conversation}></ConversationView>
                
            </View>
  )
}
