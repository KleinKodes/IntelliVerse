import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { styles } from '../fragments/mainViewStyles'
import fs from 'fs';
import { gql, useQuery } from "@apollo/client";

export const MESSAGE_SENTIMENT = gql`
        query MessageSentiment($pngString: String) {
            reqMessageSentiment(pngString: $pngString)
        }
        `
export default function PhotoDecipherPage({uri, meaning, navigation, backFunction}) {

    function get_png_string(directory):String{


        // writing to a sub-directory
        // after creating a directory called 'photos'
        var imageAsBase64 = fs.readFileSync(directory, 'base64');
        return imageAsBase64
    }
    var picString = get_png_string(uri);

    const {loading, error, data } = useQuery(MESSAGE_SENTIMENT, 
        { variables: { input: picString }})

    meaning = data.reqMessageSentiment

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
