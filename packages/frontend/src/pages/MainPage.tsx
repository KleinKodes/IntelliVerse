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
import fs from 'react-native-fs';
import ImgToBase64 from 'react-native-image-base64';
import PhotoDecipherPage from "./PhotoDecipherPage";









const MainPage = ({boxFunction1, boxFunction2, submitFunc, navigation}:{boxFunction1: Function, boxFunction2: Function, submitFunc:Function, navigation}) => {

  const [image, setImage] = useState(null);
  const [singleInput, setSingleInput] = useState("");
  const [subImg, setSubImg] = useState(false);
  const [myUri, setMyUri] = useState()
  const [myB64, setMyB64] = useState("")


    
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



  const pickImage = async () => {
    console.log("Penis");
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });
    //@ts-ignore
    setMyUri(result.uri)

    //console.log(result);
   

    if (!result.cancelled) {
      //@ts-ignore
      //Alert.alert(result.uri);
      setSubImg(true);
      //@ts-ignore
      setMyB64(result.base64)
      //@ts-ignore
      setMyUri(result.uri);
      //@ts-ignore
      console.log(result.base64)
      
    }
    else{
      
      setImage(null);
    }
    //@ts-ignore

    //@ts-ignore
    

  };



  if (subImg){
    return(
      <View style={styles.maxContainer}>
        {/*@ts-ignore*/}
          <PhotoDecipherPage baseSix4={myB64} uri={myUri} meaning={""} navigation={navigation} backFunction={() =>{setSubImg(false)}}/>
      </View>
    )
  }



  return (


    <View style={[styles.flexPage, {justifyContent:"space-around"}]}>

      <Header title={"IntelliVerse"}/>
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

{contextFlag && <MainPage navigation={navigation} submitFunc={({inp}:{inp:string})=>{console.log("I JUST CAME TO SAY HELLO");console.log(inp);console.log("GOODBYE THEN");typeInput(inp);saySubmitted(true)}} boxFunction2={() => { contextSwitch(!contextFlag); } } boxFunction1={undefined}/>}
  {!contextFlag && <EnterConversation navigation={navigation} backFunction={()=>{contextSwitch(!contextFlag)}}/>}

    </ScrollView>
  )


}



