import React, { useState } from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import * as DocumentPicker from "react-native-document-picker"
import { EnterConversation } from "./EnterConversation";
import * as ImagePicker from 'expo-image-picker';

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
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(null);
    }

  };
  


  return (


    <View style={styles.flexPage}>

      <Header title={"Seven"}/>
      <DoubleDescBox data={["Upload Text Messages", "sGive longer conversation for context"]} functions={[()=>{pickImage(); console.log("Poonis");}, boxFunction2]}/>
      <SingleInputForm prompt={"Enter an expression"} submitFunc={()=>{console.log("Piss")}} inputUpdateFunc={console.log}/>
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

