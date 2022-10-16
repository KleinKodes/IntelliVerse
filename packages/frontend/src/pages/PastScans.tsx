import React, { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import { Scan } from "../components/Scan";
import { ScanListItem } from "../components/scanListItem";
import { ExpressionDecipherPage } from "./ExpressionDecipherPage";
import { ConversationDecipherPage } from "./ConversationDecipherPage";




export const PastScansPage = ({pickFunction}:{pickFunction:Function}) => {


    
  //INSERT DB QUERY TO LOAD PAST SCANS FROM DATABASE




  //END INSERT
  const sampleScan = new Scan("sample2", "sample", "anthony hates me qqq", "this person is sad due to someone else's actions", new Date(), true);
  const scanList = [sampleScan];
  //SCANS SCHEMAS: 1 scanId, 1 userId: string, 1 input: string, 1 meaning: string, 1 scanDate: Date

    
  return (
    <View style={styles.flexPage}>

      <Header title={"Seven5"} />
      <SafeAreaView style={styles.listColumn}>
          <FlatList
          style={styles.maxWidthContainer}
            data={scanList}
            initialNumToRender={1} 
            renderItem={({ item }) => <ScanListItem touchFunction={()=>{console.log("ANTHONY QIN WAS NOT HERE"); console.log(item.scanId);console.log("GOODBYE ANATAWA");pickFunction({scan: item})}} item={item}/>}
            keyExtractor={item => item.scanId}>
          </FlatList>
        </SafeAreaView>
    </View>
  );
};

export const FullScanPage = ({navigation}) => {
    const sampleScan = new Scan("unset", "sample", "anthony hates me qqq", "this person is sad due to someone else's actions", new Date(), true);
    const scanList = [sampleScan];
    const pastFlag= useRef(true);
    const chosenScan = useRef(sampleScan);
    const [selectedScan, scanSelector] = useState(sampleScan);
    const [dummyState, dummyFunc] = useState(true);


    const [experiment, derivative]=useState({scan:sampleScan, flag:true})

    console.log(chosenScan.current.convoBool + "ASAAAA");
    console.log(!chosenScan.current.convoBool + "BANDTONNN");



    if (selectedScan!= null){
        console.log("SUS BEHAVIOUR")
    }else{
        console.log("AMOGUS SUSSUS")
    }

    // if (selectedScan == null){
    //     dummyFunc(!dummyState);
        
    // }
    
    return(
        <View style={styles.maxContainer}>

            

             {selectedScan != null && selectedScan.scanId == "unset" && <PastScansPage pickFunction={({scan}:{scan:Scan}) => {console.log("I HATE REACT"); console.log(scan.scanId); scanSelector(scan)}}/>}
            { selectedScan != null && selectedScan.scanId != "unset" && selectedScan.convoBool && <ExpressionDecipherPage backFunction={()=>scanSelector(sampleScan)} navigation={navigation} input={selectedScan.input} meaning={selectedScan.meaning}/>}
            { selectedScan != null && selectedScan.scanId != "unset" && !selectedScan.convoBool && <ConversationDecipherPage backFunction={()=>scanSelector(sampleScan)} navigation={navigation} input={selectedScan.input} meaning={selectedScan.meaning}/>}
        </View>
    )



}
