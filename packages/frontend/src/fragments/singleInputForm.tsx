import  SvgComponent  from"../assets/images/headerCircle"
import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from "./mainViewStyles";

export const SingleInputForm = ({prompt} : {prompt:string}) => {
    return(
        <View style={styles.inputBoxBox}>
            <Text style={styles.whiteText2}>{prompt}</Text>
      <TextInput style={styles.inputBox}></TextInput>
        </View>
    )
}


