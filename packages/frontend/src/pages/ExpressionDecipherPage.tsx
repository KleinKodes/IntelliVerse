import React from "react";
import { View, Text } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";

export const ExpressionDecipherPage = ({input, meaning}:{input: string, meaning:string}) => {
  return (


    <View style={styles.flexPage}>

      <Header title={"Seven2"} />
      <View style={styles.inputBoxBox}>
        <Text style={styles.whiteText2}>Input:</Text>
        <View style={styles.inputBox}>
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
  );
};
