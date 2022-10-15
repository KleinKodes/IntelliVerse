import { DescBox } from "../components/DescBox";
import React, { useState } from "react"
import { TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useMutation } from '@apollo/client';
import { LinearGradient } from 'expo-linear-gradient';
import { registerRootComponent } from 'expo';
import { styles } from "../fragments/mainViewStyles";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const DoubleDescBox = ({data}: {data:string[]}) => {


    return (
      <View style={styles.rowFlex1}>
  
        <DescBox text1={data[0]} />
  
  
        <DescBox text1={data[1]} />
      </View>
    );
  };
  