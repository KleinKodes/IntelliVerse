import React from 'react'
import {Text, View} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextMessage } from '../fragments/TextMessage';
import { styles } from '../fragments/mainViewStyles';
import { ScrollView } from 'react-native-gesture-handler';

export const ConversationView = (props: {conversation:any[]}) =>{
  return (
    <ScrollView contentContainerStyle={{flexGrow:1}} style={{width:"100%", height:"100%"}}>
      <View style={{flex:1, flexDirection:"column", flexGrow:1}}>

     
       {props.conversation.map(({message, person}) => {
            return(<TextMessage message={message} person={person}/>);
        })}
         </View>

    </ScrollView>
       
        

  )
}
