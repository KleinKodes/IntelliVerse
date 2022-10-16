import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "../fragments/mainViewStyles"
import { Scan } from './Scan';


export const ScanListItem = ({item, touchFunction}:{item:Scan, touchFunction:Function}) => {
  


   
      console.log("Will soon say hey listen!");
      console.log(item.scanId);
      
      return (
        <TouchableOpacity onPress={() => {touchFunction()}}>
          <View style={styles.flexPage}>
  
        
          <View style={styles.listItemColumn}>
           
           {item.input.length < 20 && <Text style={styles.splitTextNormal}>Input: {item.input}</Text>}
           
           {item.input.length >= 20 && <Text style={styles.splitTextNormal}>Input: {item.input.slice(0, 15) + "..."}</Text>}
           
           {item.meaning.length < 20 && <Text style={styles.splitTextNormal}>Meaning: {item.meaning}</Text>}
            
            {item.meaning.length >= 20 && <Text style={styles.splitTextNormal}>Meaning: {item.meaning.slice(0, 15) + "..."}</Text>}
         
         
          </View>
          
          </View>
        </TouchableOpacity>
  
      );
  
    
}