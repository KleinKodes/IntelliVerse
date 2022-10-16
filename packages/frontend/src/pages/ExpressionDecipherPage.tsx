import React from "react";
import { View, Text, Alert } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import { gql, useQuery } from "@apollo/client";

export const SINGLE_INPUT = gql`
query putSingleInput($input: String!) {
  reqExpressionSentiment(input: $input)
}
`;

export const ExpressionDecipherPage = ({input, meaning, navigation, backFunction, pastFlag}:{input: string, meaning:string, navigation, backFunction:Function, pastFlag: Boolean}) => {

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e) => {
          // Prevent default behavior
          e.preventDefault();


      
          // Do something manually
          // ...
          backFunction();
          console.log("WE GOTTA REVERT");
        });
      
        return unsubscribe;
      }, [navigation]);

      if (!pastFlag){

      const {loading, error, data } = useQuery(SINGLE_INPUT, {
        variables: { input: input}})

        if (loading) return <Text>Loading...</Text>;
        console.log(JSON.stringify(data))
        Alert.alert(data.reqExpressionSentiment);
        meaning = data.reqExpressionSentiment;
      }

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
