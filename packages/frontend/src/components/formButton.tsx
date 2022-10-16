import { Button, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { styles } from "../fragments/mainViewStyles"




export const FormButton = ({title, buttonFunction, argument}: {title: string, buttonFunction:Function, argument:any}) => {
    return (
        <View style = {[ {
            justifyContent: "center",
            width: "100%",
            marginTop: 5,
            flexDirection: 'row',
            maxHeight:120

        }]}>
           <TouchableOpacity style = {{
                
                backgroundColor: "#D8B4A0",
                borderRadius: 30,
                paddingRight: 70,
                paddingLeft: 70,
                width: "100%",
                minWidth: 300,
                alignItems: 'center',
                justifyContent: 'center',
                height: "50%",
                marginTop: "3%",
                maxHeight: 120,
                
                
                
           }}
           onPress={() => {buttonFunction(argument)}}>
                <Text style = {{
                    color: "",
                    fontSize: 28
                }}>
                    {title}
                </Text>
           </TouchableOpacity>
        </View>
    )
}