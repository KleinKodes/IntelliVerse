import React, { useState } from "react";
import { View } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import { EnterConversation } from "./EnterConversation";

export const MainPage = ({boxFunction1, boxFunction2}:{boxFunction1: Function, boxFunction2: Function}) => {
 const submit = () =>{
      console.log("temp")
    }
  return (

    

    <View style={styles.flexPage}>

      <Header title={"Seven"}/>
      <DoubleDescBox data={["Upload Text Messages", "Give longer conversation for context"]} functions={[boxFunction1, boxFunction2]}/>
      <SingleInputForm prompt={"Enter an expression"} submitFunc={submit} inputUpdateFunc={console.log}/>
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


