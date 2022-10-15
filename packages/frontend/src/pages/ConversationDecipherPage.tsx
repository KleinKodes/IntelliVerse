import React from "react";
import { View, Text } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export const ConversationDecipherPage = ({input, meaning}:{input: string, meaning:string}) => {
  return (
    <View style={styles.flexPage}>
    <Header title={"Seven3"} />
    
        <ScrollView contentContainerStyle={{flexGrow:1}} style={ {width:"100%"}}>
            <View style={{flex:1, flexGrow:1}}>
            <View style={styles.inputBoxBoxTall}>
                <Text style={styles.whiteText2}>Input:</Text>
                <View style={styles.inputBoxTall}>
                    <Text style={styles.boxText}>{input}</Text>
                </View>
            </View>
            <View style={styles.inputBoxBoxTall}>
                <Text style={styles.whiteText2}>Meaning:</Text>
                <View style={styles.inputBoxTall}>
                    <Text style={styles.boxText}>{meaning}</Text>
                </View>
            </View>
            </View>
            
        </ScrollView>

     
      
      
      
    
    </View>
  );
};
