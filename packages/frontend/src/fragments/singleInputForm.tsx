import  SvgComponent  from"../assets/images/headerCircle"
import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from "./mainViewStyles";
import { FormButton } from "../components/formButton";

export const SingleInputForm = ({prompt} : {prompt:string}) => {
    return(
        <View style={styles.flexPage}>
            <Text style={styles.whiteText2}>{prompt}</Text>
            <View style={styles.inputBoxBox}>
            
            <TextInput style={styles.inputBox}></TextInput>
      
            </View>

            
            <FormButton argument={null} title={"Submit"} buttonFunction={() => {console.log("WIP")}}></FormButton>
            
        </View>
        
    )
}


