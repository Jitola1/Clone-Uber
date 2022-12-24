import React from "react"
import {View, Text} from "react-native"

export default function ResultCalculadora(props){
    return(
        <View>
            <Text>{props.messageResultCalculadora}</Text>
            <Text>{props.ResultCalculadora}</Text>
        </View>
    );
}