import React, { useState } from "react";
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import * as DocumentPicker from "react-native-document-picker"

export const MainPage = () => {
 const submit = () =>{
      console.log("temp")
    }


  async function docPicker(){
      try{
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
          presentationStyle: undefined
        });
        this.uploadAPICall(res);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log("error -----", err);
        } else {
          throw err;
        }
      }
      }
  
  const [showDocPicker, setShowDocPicker] = useState(false);

  return (


    <View style={styles.flexPage}>

      <Header title={"Seven"}/>
      <DoubleDescBox data={["Upload Text Messages", "Give longer conversation for context"]} onClickFunc={()=>{setShowDocPicker(true); console.log(showDocPicker)}}/>
      {showDocPicker && <View
                  style={{
                      width: "30%",
                      top: 8,
                      justifyContent: "center",
                      borderRadius: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() =>docPicker()}

                    >
                    <Text> {'upload  doc'}</Text>
                    </TouchableOpacity>
                  </View>}
      <SingleInputForm prompt={"Enter an expression"} submitFunc={submit} inputUpdateFunc={console.log}/>
    </View>


  );
};
