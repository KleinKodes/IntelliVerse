import React from 'react'
import { Button, View } from 'react-native'
import { ConversationView } from '../components/ConversationView'
import { Header } from '../fragments/header'
import { styles } from '../fragments/mainViewStyles'
import { useState } from 'react';
import { SingleInputForm } from '../fragments/singleInputForm'
import { FormButton } from '../components/formButton'
import { DualButton } from '../components/DualButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';

//var count = 1;

export const EnterConversation = ({backFunction, navigation}: {backFunction: Function, navigation}) => {
    const [mode, setMode] = useState(0);
    const [conversation, setConversation] = useState([]);
    const [userInput, setUserInput] = useState("");

    const addText = ({message, person} : {message:string, person:number}) => {
        // setConversation(prev => [...prev, {message: {message}, person:{person}}]);
        setConversation([...conversation, {message, person}]);
    }

    const changeMode = () => {
        setMode(mode^1);
        console.log(mode);
    }

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e) => {
          // Prevent default behavior
          e.preventDefault();


      
          // Do something manually
          // ...
          backFunction();
          console.log("WE GOTTA REVERT");
        });
      
        return unsubscribe;
      }, [navigation]);

    //if (count == 1) {console.log("HEY LISTEN!"); setConversation([{message: "penis penis penis penis!", person:0}, {message: "penis penis penis penis1", person:1}]); count++;} else {console.log("NVM DONE LISTENING")}
    return (
        <View style={styles.flexPage}>

            <Header title={"Enter a Conversation"} size={"h4"}/>


           

            <View style={styles.inputBoxBoxTall}>
                <View style={styles.inputBoxTall}>
                    <ConversationView conversation = {conversation}></ConversationView>
                </View>
            </View>
           
            
            
            <View style={{ width:"100%", height:"100%", flex:1,flexDirection:"column", justifyContent:"flex-start"}}>
                <DualButton buttonFunctions={[() => {changeMode()}, ()=>{addText({message:userInput, person:mode})}]} titles={["Change Mode", "Submit"]}></DualButton>
                <SingleInputForm mode={mode} prompt={"Enter a text message..."} submitFunc={() =>{addText({message:userInput, person:mode})}} inputUpdateFunc={setUserInput}></SingleInputForm>

            </View>
            

                
        </View>
  )
}
