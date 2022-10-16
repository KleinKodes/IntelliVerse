import React from 'react'
import {ScrollView, Text, View} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextMessage } from '../fragments/TextMessage';
import { styles } from '../fragments/mainViewStyles';

export const ConversationView = (props: {conversation:any[]}) =>{
  return (
    <ScrollView>
        <SafeAreaView style={styles.conversationView}>
            {props.conversation.map(({message, person}) => {
                return(<TextMessage message={message} person={person}/>);
            })}
        
        </SafeAreaView>
    </ScrollView>
    
  )
}
