import React, { useState } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { styles } from '../fragments/mainViewStyles'
import ImgToBase64 from 'react-native-image-base64';
import { gql, useQuery } from "@apollo/client";
import * as ImagePicker from 'expo-image-picker';

export const MESSAGE_SENTIMENT = gql`
        query MessageSentiment($pngString: String) {
            reqMessageSentiment(pngString: $pngString)
        }
        `;
export default function PhotoDecipherPage({uri, meaning, navigation, backFunction, baseSix4}) {
    const [meaning2, meaning2Set] = useState("");
    const [pcStr, pcStrSet] = useState("temp");



    console.log(baseSix4);
    console.log("poo");
    
    //get_png_string(uri).then((value:string)=>{pcStrSet(value)});


   
    const {loading, error, data } = useQuery(MESSAGE_SENTIMENT, 
            { variables: { input: baseSix4}})
            if (loading){
                return(<View><Text>Loading...</Text></View>)
            }
            console.log("ERROR: " + error.name + " " + error.message)
            console.log(JSON.stringify(data))
            meaning2Set(data.reqMessageSentiment)
    
    


    
  
    

  return (
    <View style={styles.flexPage}>
    <Header title={"Seven3"} />
    
        <ScrollView contentContainerStyle={{flexGrow:1}} style={ {width:"100%"}}>
            <View style={{flex:1, flexGrow:1}}>
            <View style={styles.inputBoxBoxTall}>
                <Text style={styles.whiteText2}>Input:</Text>
                <View style={styles.inputBoxTall}>
                    <Image source={uri}/>
                </View>
            </View>
            <View style={styles.inputBoxBoxTall}>
                <Text style={styles.whiteText2}>Meaning:</Text>
                <View style={styles.inputBoxTall}>
                    <Text style={styles.boxText}>{meaning}</Text>
                </View>
            </View>
            </View>
            
            
        </ScrollView>

     
      
      
      
    
    </View>
  )
}
