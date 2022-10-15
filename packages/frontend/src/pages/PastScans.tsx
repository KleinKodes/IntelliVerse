import React from "react";
import { View, SafeAreaView, FlatList } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";
import { Scan } from "../components/Scan";
import { ScanListItem } from "../components/scanListItem";

export const PastScansPage = () => {
  //INSERT DB QUERY TO LOAD PAST SCANS FROM DATABASE



  //END INSERT

  //SCANS SCHEMAS: 1 scanId, 1 userId: string, 1 input: string, 1 meaning: string, 1 scanDate: Date

    const sampleScan = new Scan("sample", "sample", "anthony hates me qqq", "this person is sad due to someone else's actions", new Date())
    const scanList = [sampleScan];
  return (


    <View style={styles.flexPage}>

      <Header title={"Seven5"} />
      <SafeAreaView style={styles.listColumn}>
          <FlatList
          style={styles.maxWidthContainer}
            data={scanList}
            renderItem={({ item }) => (<ScanListItem item={item}/>)}
            keyExtractor={item => item.scanId}>
          </FlatList>
        </SafeAreaView>
    </View>
  );
};
