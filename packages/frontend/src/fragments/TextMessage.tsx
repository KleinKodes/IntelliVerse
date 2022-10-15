import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './mainViewStyles'

function penis(cow){
    if(cow === 0) return styles.enemyText;
    else return styles.playerText;
}

export const TextMessage = (props: {message: string, person: number}) =>{
  return (
    <View style={penis(props.person)}>
        <Text >{props.message}</Text>
    </View>
  )
}
