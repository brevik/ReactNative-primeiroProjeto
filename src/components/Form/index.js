import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import { ResultImc } from "./ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [textImc, setTextImc] = useState(null)


    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function verificarImc(){
        if (imc < 16.9)
            setTextImc("Muito abaixo do peso")
        else if (imc < 18.4)
            setTextImc("Abaixo do peso")
        else if (imc < 24.9)
            setTextImc("Peso normal")
        else if (imc < 29.9)
            setTextImc("Acima do peso")
        else if (imc < 34.9)
            setTextImc("Obesidade grau I")
        else if (imc <= 40)
            setTextImc("Obesidade grau II")
        else if (imc > 40)
            setTextImc("Obesidade grau III")

    }
    
    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é: ")
            setTextButton("Calcular novamente")
            verificarImc()
            return
        }
        setImc(null)
        setTextImc(null)
        setMessageImc("Preencha o peso e altura")
        setTextButton("Calcular")
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
                placeholder="Ex. 75.375"
                keyboardType="numeric"
                />

                <Button 
                onPress={() => validationImc()}
                title={textButton} />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} textImc={textImc}/>
        </View>
        
        
    );
}