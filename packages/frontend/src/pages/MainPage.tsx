import React, { useState } from "react";
import { TouchableOpacity, View, Text, Alert, ScrollView, Button } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import * as DocumentPicker from "react-native-document-picker"
import { EnterConversation } from "./EnterConversation";
import * as ImagePicker from 'expo-image-picker';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { ExpressionDecipherPage } from "./ExpressionDecipherPage";
import fs from 'fs';







const MainPage = ({boxFunction1, boxFunction2, submitFunc}:{boxFunction1: Function, boxFunction2: Function, submitFunc:Function}) => {

  const [image, setImage] = useState(null);
  const [singleInput, setSingleInput] = useState("");


  function get_png_string(directory):String{


    // writing to a sub-directory
    // after creating a directory called 'photos'
    var imageAsBase64 = fs.readFileSync(directory, 'base64');
    return imageAsBase64
}
    
  const submitSingle = ({singleInput}:{singleInput:string}) => {

    console.log("Shipping off \"" + singleInput + "\" to backend");


    submitFunc({inp:singleInput});
    
  
      
    
   
  }
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

  var imageString

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
    //@ts-ignore
    imageString = get_png_string(result.uri);

  };



  



  return (


    <View style={[styles.flexPage, {justifyContent:"space-around"}]}>

      <Header title={"Seven"}/>
      <DoubleDescBox data={["Upload Text Messages", "Give longer conversation for context"]} functions={[()=>{pickImage(); console.log("Poonis");}, boxFunction2]}/>
      <SingleInputForm prompt={"Enter an expression"} submitFunc={()=>{submitSingle({singleInput: singleInput})}} inputUpdateFunc={(text:string)=>{setSingleInput(text)}}/>
    </View>


  );
};

export const FullMainPage = ({navigation}) => {
  const [contextFlag, contextSwitch] = useState(true);
  const [submitted, saySubmitted] = useState(false);
  const [inputText, typeInput] = useState("");

  if (submitted){
    console.log("H<<");
    console.log(inputText);
    console.log("HAA");
    return(
      <ScrollView style={styles.maxContainer} keyboardDismissMode={'none'}>

      <ExpressionDecipherPage input={inputText} meaning={""} navigation={navigation} backFunction={()=>{saySubmitted(false)}} pastFlag={false}/>
      
          </ScrollView>
    )
  }else

  return(
    <ScrollView style={styles.maxContainer} keyboardDismissMode={'none'}>

{contextFlag && <MainPage submitFunc={({inp}:{inp:string})=>{console.log("I JUST CAME TO SAY HELLO");console.log(inp);console.log("GOODBYE THEN");typeInput(inp);saySubmitted(true)}} boxFunction2={() => { contextSwitch(!contextFlag); } } boxFunction1={undefined}/>}
  {!contextFlag && <EnterConversation navigation={navigation} backFunction={()=>{contextSwitch(!contextFlag)}}/>}

    </ScrollView>
  )


}



