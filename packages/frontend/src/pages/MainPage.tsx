import React, { useState } from "react";
import { TouchableOpacity, View, Text, Alert } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import * as DocumentPicker from "react-native-document-picker"
import { EnterConversation } from "./EnterConversation";
import * as ImagePicker from 'expo-image-picker';
import { gql, useQuery } from '@apollo/client';

export const MainPage = ({boxFunction1, boxFunction2}:{boxFunction1: Function, boxFunction2: Function}) => {

  const [image, setImage] = useState(null);
  // async function docPicker(){
  //     try{
  //       const res = await DocumentPicker.pick({
  //         type: [DocumentPicker.types.images],
  //       });
  //       this.uploadAPICall(res);
  //     } catch (err) {
  //       if (DocumentPicker.isCancel(err)) {
  //         console.log("error -----", err);
  //       } else {
  //         throw err;
  //       }
  //     }
  //     }

  const pickImage = async () => {
    console.log("Penis");
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);
   

    if (!result.cancelled) {
      //@ts-ignore
      Alert.alert(result.uri);
    }
    else{
      
      setImage(null);
    }

  };
  
  const [singleInput, setSingleInput] = useState("");
  const SINGLE_INPUT = gql`
    query putSingleInput($input: String!) {
      reqExpressionSentiment(input: $input)
  }
`;
  const submitSingle = () => {
    console.log("Shipping off \"" + singleInput + "\" to backend");
    const { loading, error, data } = useQuery(SINGLE_INPUT, {
      variables: { input: singleInput },
    });
    if (loading) return <Text>Loading...</Text>;
    Alert.alert(data);
    return data;
  }


  return (


    <View style={[styles.flexPage, {justifyContent:"space-around"}]}>

      <Header title={"Seven"}/>
      <DoubleDescBox data={["Upload Text Messages", "Give longer conversation for context"]} functions={[()=>{pickImage(); console.log("Poonis");}, boxFunction2]}/>
      <SingleInputForm prompt={"Enter an expression"} submitFunc={()=>{submitSingle()}} inputUpdateFunc={({text}:{text:string})=>{setSingleInput(text)}}/>
    </View>


  );
};

export const FullMainPage = ({navigation}) => {
  const [contextFlag, contextSwitch] = useState(true);

  return(
    <View style={styles.maxContainer}>

{contextFlag && <MainPage boxFunction2={() => { contextSwitch(!contextFlag); } } boxFunction1={undefined}/>}
  {!contextFlag && <EnterConversation navigation={navigation} backFunction={()=>{contextSwitch(!contextFlag)}}/>}

    </View>
  )


}

