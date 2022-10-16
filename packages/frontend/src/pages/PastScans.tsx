import React, { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, FlatList } from 'react-native';
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
            renderItem={({ item }) => <ScanListItem touchFunction={()=>{pickFunction(item)}} item={item}/>}
            keyExtractor={item => item.scanId}>
          </FlatList>
        </SafeAreaView>
    </View>
  );
};

export const FullScanPage = () => {
    const sampleScan = new Scan("sample2", "sample", "anthony hates me qqq", "this person is sad due to someone else's actions", new Date(), true);
    const scanList = [sampleScan];
    const pastFlag= useRef(true);
    const chosenScan = useRef(sampleScan);

    const [experiment, derivative]=useState({scan:sampleScan, flag:true})

    console.log(chosenScan.current.convoBool + "ASAAAA");
    console.log(!chosenScan.current.convoBool + "BANDTONNN");
    
   

    return(
        <View style={styles.maxContainer}>

            {experiment.flag && <PastScansPage pickFunction={({scan}:{scan:Scan}) => {derivative({scan: scan, flag:false});}}/>}
            {!experiment.flag && experiment.scan.convoBool && <ExpressionDecipherPage input={experiment.scan.input} meaning={experiment.scan.meaning}/>}
            {!experiment.flag && !experiment.scan.convoBool && <ConversationDecipherPage input={experiment.scan.input} meaning={experiment.scan.meaning}/>}
        </View>
    )
}
