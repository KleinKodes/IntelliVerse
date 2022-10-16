import  SvgComponent  from"../assets/images/headerCircle"
import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from "./mainViewStyles";

function setStyle(size){
    switch(size){
        case "h1":
            return styles.myHeaderText;
        case "h2":
            return styles.myHeaderTextH2;
        case "h3":
            return styles.myHeaderTextH3;
        case "h4":
            return styles.myHeaderTextH4;
        case "h5":
            return styles.myHeaderTextH5;    
        default:
            return styles.myHeaderText;         
    }
}

export const Header = (props: {title:string, size?:string}) => {
    return(
        <View style={styles.headerContainer}>
            <SvgComponent zIndex={-1}/>
            <View  style={styles.headerView}>
            <Text style={setStyle(props.size)}>{props.title}</Text>
            <Text></Text>
            </View>
        </View>
    )
}