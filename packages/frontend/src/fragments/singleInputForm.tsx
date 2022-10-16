import  SvgComponent  from"../assets/images/headerCircle"
import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from "./mainViewStyles";
import { FormButton } from "../components/formButton";

export const SingleInputForm = ({prompt, submitFunc, inputUpdateFunc, mode} : {prompt:string, submitFunc:Function, inputUpdateFunc: Function, mode?:number}) => {
    if (mode != null && mode == 1){
        var extra={backgroundColor:"#D8B4A0"};
    }else var extra={backgroundColor:"#DBD3D8"}
    return(
        <View style={[styles.flexPage, {justifyContent:'center'}]}>
            <Text style={styles.whiteText2}>{prompt}</Text>
            <View style={styles.inputBoxBox}>
            
            <TextInput style={[styles.inputBox, extra]} onChangeText={(text:string) => {inputUpdateFunc(text)}}></TextInput>
      
            </View>

            
            <FormButton argument={null} title={"Submit"} buttonFunction={() => {submitFunc()}}></FormButton>
            
        </View>
        
    )
}


