import React from "react";
import { View } from 'react-native';
import { styles } from "../fragments/mainViewStyles";
import { Header } from "../fragments/header";
import { DoubleDescBox } from "../fragments/DoubleDescBox";
import { SingleInputForm } from "../fragments/singleInputForm";

export const MainPage = () => {
  return (


    <View style={styles.flexPage}>

      <Header title={"Seven"} />
      <DoubleDescBox data={["Upload Text Messages", "Give longer conversation for context"]} />
      <SingleInputForm prompt={"Enter an expression"} />
    </View>
  );
};
