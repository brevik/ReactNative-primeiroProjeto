import React from "react";
import { View, Text} from "react-native"

export function ResultImc(props){
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
            <Text>{props.textImc}</Text>
        </View>
    )
}