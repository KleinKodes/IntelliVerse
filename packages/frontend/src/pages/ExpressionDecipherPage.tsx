import React from "react";
import { View, Text, Alert } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import { gql, useQuery } from "@apollo/client";
import CacheStore from 'react-native-cache-store';
import { Scan } from "../components/Scan";

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
        //Alert.alert(data.reqExpressionSentiment);

        meaning = data.reqExpressionSentiment;

        console.log("TELL ME WHY");

        CacheStore.get('ScanList').then((value:Scan[]) => {

          console.log(JSON.stringify(value));

          console.log(":c:C:c");
          if (value != undefined)
          value[value.length] = new Scan("IDEK anymore", "not JP", input, data.reqExpressionSentiment, new Date(), false);
          else {value = [ new Scan("IDEK anymore", "not JP", input, data.reqExpressionSentiment, new Date(), false)]}
          
          for (var i = 0; i<value.length;i++){
            value[i].scanId=i+"7";
          }
          CacheStore.set('ScanList', value)
        })

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
