import  SvgComponent  from"../assets/images/headerCircle"
import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { styles } from "./mainViewStyles";

export const Header = ({title} : {title:string}) => {
    return(
        <View style={styles.headerContainer}>
            <SvgComponent zIndex={-1}/>
            <View  style={styles.headerView}>
            <Text style={styles.myHeaderText}>{title}</Text>
            </View>
        </View>
    )
}