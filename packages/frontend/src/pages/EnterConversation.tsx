import React from 'react'
import { Button, View } from 'react-native'
import { ConversationView } from '../components/ConversationView'
import { Header } from '../fragments/header'
import { styles } from '../fragments/mainViewStyles'
import { useState } from 'react';

var count = 1;

export const EnterConversation = () => {
    const [mode, setMode] = useState(0);
    const [conversation, setConversation] = useState([]);
    const addText = ({message, person} : {message:string, person:number}) => {
        const prev = conversation;
        const newMessage = {message: {message}, person:{person}}
        setConversation(prev => [...prev, newMessage]);
    }

    if (count == 1) {console.log("HEY LISTEN!"); setConversation([{message: "penis penis penis penis!", person:0}, {message: "penis penis penis penis1", person:1}]); count++;} else {console.log("NVM DONE LISTENING")}
    return (
        <View style={styles.flexPage}>
            <Header title={"Enter a Conversation"} size={"h4"}/>
            <ConversationView conversation = {conversation}></ConversationView>
            
            <Button title="beans"/>
                
        </View>
  )
}
