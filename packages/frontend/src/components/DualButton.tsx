import { Button, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { styles } from "../fragments/mainViewStyles"




export const DualButton = ({titles, buttonFunctions}: {titles: string[], buttonFunctions:Function[]}) => {
    return (
        
        <View style = {[ {
            justifyContent: "space-evenly",
            width: "100%",
            marginTop: 5,
            flexDirection: 'row',
            maxHeight:120

        }]}>
           <TouchableOpacity style = {{
                
                backgroundColor: "#D8B4A0",
                borderRadius: 30,
 
                width:"100%",
                alignItems: 'center',
                justifyContent: 'center',
                height: "70%",
                marginTop: "3%",
                maxHeight: 120,
                paddingHorizontal:"5%"
                
                
                
           }}
           onPress={() => {buttonFunctions[0]()}}>
                
                <Text style = {{
                    color: "",
                    fontSize: 28
                }}>
                    {titles[0]}
                </Text>
            
                
           </TouchableOpacity>

           <View style={{backgroundColor: "#000000", width:5, height:"100%", position: "absolute", left:0, right:0}}/>

           <TouchableOpacity style = {{
                
                backgroundColor: "#D8B4A0",
                borderRadius: 30,
 
                width:"100%",
                alignItems: 'center',
                justifyContent: 'center',
                height: "70%",
                marginTop: "3%",
                maxHeight: 120,
                paddingHorizontal:"5%"
                
                
                
           }}
           onPress={() => {buttonFunctions[1]()}}>

                <Text style = {{
                    color: "",
                    fontSize: 28
                }}>
                    {titles[1]}
                </Text>

           </TouchableOpacity>
        </View>
    )
}