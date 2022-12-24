import * as React from 'react';
import { Text, View ,TextInput, Button, ViewBase, StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper';
import ResultCalculadora from '../ResultCalculadora';
//dsadasdas

export default function Form() {
    const [checked, setChecked] = React.useState(null);
    const [valor1, setValor1] = React.useState('0');
    const [valor2, setValor2] = React.useState('0');
    const[resultado, setResultado] = React.useState('0');
    const[messageCalculadora, setMessageCalculadora] = React.useState('Coloque os valores');

    function Calcular() {
        if(checked == "Somar"){
            setMessageCalculadora('O valor da sua soma é: ');
            setResultado(parseFloat(valor1)+parseFloat(valor2)).toFixed(1);
            return 
        }
        else if(checked == "Subtrair")
        {
            setMessageCalculadora('O valor da sua Subtração é: ');
            setResultado((parseFloat(valor1)-parseFloat(valor2).toFixed(1)))
            return 
        }
    }

  return (
    <View>
      <Text style={styles.textoForm}>Digite o Primeiro valor</Text>
      <TextInput style={styles.input} keyboardType='numeric' value={valor1} onChangeText={setValor1}/>
      <Text style={styles.textoForm}>Digite o Segundo valor</Text>
      <TextInput style={styles.input} keyboardType='numeric' value={valor2} onChangeText={setValor2}/>
      <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
      <View>
        <Text style={styles.texto}>Soma</Text>
        <RadioButton
            color='green' value="Somar"
        />
      </View>
      <View>
        <Text style={styles.texto}>Subtrair</Text>
        <RadioButton
        color='green' value="Subtrair"
        />
      </View>
      </RadioButton.Group>
      <Button onPress={() => Calcular()} color='green' title='Calcular'/>
      <ResultCalculadora messageResultCalculadora={messageCalculadora} ResultCalculadora={resultado}/>
    </View>
  );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
      color: '#006400'
    },
    textoForm: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#32CD32'
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
  });
