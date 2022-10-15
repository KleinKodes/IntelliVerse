import React from 'react'
import {Text, View} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextMessage } from '../fragments/TextMessage';
import { styles } from '../fragments/mainViewStyles';

export const ConversationView = (props: {conversation:any[]}) =>{
  return (
    <SafeAreaView style={styles.conversationView}>
        <Text>I am a conversation</Text>
        {props.conversation.map(({message, person}) => {
            return(<TextMessage message={message} person={person}/>);
        })}
        
    </SafeAreaView>
  )
}
