import React from 'react'
import { Button, View } from 'react-native'
import { ConversationView } from '../components/ConversationView'
import { Header } from '../fragments/header'
import { styles } from '../fragments/mainViewStyles'
import { useState } from 'react';
import { SingleInputForm } from '../fragments/singleInputForm'

var count = 1;

export const EnterConversation = () => {
    const [mode, setMode] = useState(0);
    const [conversation, setConversation] = useState([]);
    const [userInput, setUserInput] = useState("");

    const addText = ({message, person} : {message:string, person:number}) => {
        // setConversation(prev => [...prev, {message: {message}, person:{person}}]);
        setConversation([...conversation, {message, person}]);
    }

    const changeMode = () => {
        if(mode === 0) setMode(1);
        else setMode(0);
        console.log(mode);
    }

    if (count == 1) {console.log("HEY LISTEN!"); setConversation([{message: "penis penis penis penis!", person:0}, {message: "penis penis penis penis1", person:1}]); count++;} else {console.log("NVM DONE LISTENING")}
    return (
        <View style={styles.flexPage}>
            <Header title={"Enter a Conversation"} size={"h4"}/>
            <ConversationView conversation = {conversation}></ConversationView>
            
            <View>
                <Button title="Change Mode" onPress={changeMode}/>
                <Button title="submit" onPress={() =>{addText({message:userInput, person:mode})}}/>
                <SingleInputForm prompt={"Enter a text message..."} submitFunc={() =>{addText({message:userInput, person:mode})}} inputUpdateFunc={setUserInput}></SingleInputForm>

            </View>
            

                
        </View>
  )
}
