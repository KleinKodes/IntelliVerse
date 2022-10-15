import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../fragments/mainViewStyles';


export const DescBox = ({text1} : {text1: string}) => {
  return (
    <View style={styles.rcorners1}>
      <TouchableOpacity style={styles.container}>
        <LinearGradient colors={['#D8B4A0', '#D8D3D8']} style={styles.linearGradient1} start={[-0.04, 0]} end={[1.34, 1.34]}>
          
          <Text style={styles.boxText}>{text1}</Text>
          
        </LinearGradient>

      </TouchableOpacity>

    </View>
  );
};
