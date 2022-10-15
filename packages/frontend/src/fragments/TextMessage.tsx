import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './mainViewStyles'

function penis(cow){
    if(cow === 0) return styles.enemyText;
    else return styles.playerText;
}

function penis2(cow){
  if(cow === 0) return styles.enemyTextContainer;
  else return styles.playerTextContainer;
}

export const TextMessage = (props: {message: string, person: number}) =>{
  return (
  

<View style={penis2(props.person)}>
    

    
    <View style={penis(props.person)}>
        <Text >{props.message}</Text>
    </View>
  </View>
 
    
  )
}
