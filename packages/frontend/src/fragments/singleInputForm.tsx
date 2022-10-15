import  SvgComponent  from"../assets/images/headerCircle"
import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from "./mainViewStyles";
import { FormButton } from "../components/formButton";

export const SingleInputForm = ({prompt, submitFunc, inputUpdateFunc} : {prompt:string, submitFunc:Function, inputUpdateFunc: Function}) => {
    return(
        <View style={styles.flexPage}>
            <Text style={styles.whiteText2}>{prompt}</Text>
            <View style={styles.inputBoxBox}>
            
            <TextInput style={styles.inputBox} onChangeText={(text:string) => inputUpdateFunc(text)}></TextInput>
      
            </View>

            
            <FormButton argument={null} title={"Submit"} buttonFunction={() => {submitFunc()}}></FormButton>
            
        </View>
        
    )
}


