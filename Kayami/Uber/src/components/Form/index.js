import React, { useState } from "react";
import { TextInput, View, Text, Button} from "react-native";
import ResultIMC from "./ResultIMC/";

export default function Form(){

    const [height,setHeight] = useState(null);
    const [weight,setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preecha o peso e a altura");
    const [imc,setImc] = useState(null);
    const [TextButton,setTextButton] = useState("Calcular");

    function imcCalculator(){
        console.log(weight);
        console.log(height);
        let calc= (weight / (height * height)).toFixed(2);
        console.log(calc);
        setImc(calc);
        return 

    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setWeight("");
            setHeight("");
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            return;
        }else{
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura");
        }
    }

    return(
       <View>
            <View>
                <Text>Altura</Text>

                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text>Peso</Text>

                <TextInput
                 onChangeText={setWeight}
                 value={weight}
                 placeholder="Ex. 80"
                 keyboardType="numeric"
                />

                <Button 
                onPress={() => validationImc()}
                title={TextButton}/>

            </View>

            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
       </View>
    );
}