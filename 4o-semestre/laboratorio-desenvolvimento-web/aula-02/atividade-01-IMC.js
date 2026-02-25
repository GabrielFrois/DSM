import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState({ texto: '', cor: '#000' });

  const calcularIMC = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));

    if (!p || !a || a === 0) {
      Alert.alert('Erro', 'Por favor, preencha o peso e a altura corretamente.');
      return;
    }

    const imc = p / (a * a);
    const imcFormatado = imc.toFixed(2);
    setResultado(imcFormatado);

    if (imc < 18.5) {
      setClassificacao({ texto: 'Abaixo do Peso', cor: '#FFCC00' });
    } else if (imc <= 24.9) {
      setClassificacao({ texto: 'Peso Normal (Eutrofia)', cor: '#2ECC71' });
    } else if (imc <= 29.9) {
      setClassificacao({ texto: 'Sobrepeso', cor: '#F39C12' });
    } else if (imc <= 34.9) {
      setClassificacao({ texto: 'Obesidade Grau I', cor: '#E67E22' });
    } else if (imc <= 39.9) {
      setClassificacao({ texto: 'Obesidade Grau II (Severa)', cor: '#E74C3C' });
    } else {
      setClassificacao({ texto: 'Obesidade Grau III (Mórbida)', cor: '#C0392B' });
    }
  };

  const limpar = () => {
    setPeso('');
    setAltura('');
    setResultado(null);
    setClassificacao({ texto: '', cor: '#000' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <Text style={styles.label}>Peso (kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 80"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <Text style={styles.label}>Altura (m)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1.75"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={limpar}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultValue}>{resultado}</Text>
          <Text style={[styles.resultText, { color: classificacao.cor }]}>
            {classificacao.texto}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 30,
    backgroundColor: '#F5F6FA',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#2F3640' 
  },

  label: { 
    fontSize: 16, 
    color: '#7F8C8D', 
    marginBottom: 5 
  },

  input: { 
    backgroundColor: '#FFF', 
    height: 50, 
    borderRadius: 10, 
    paddingHorizontal: 15, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderColor: '#DCDDE1' 
  },

  buttonContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },

  button: { 
    backgroundColor: '#44BD32', 
    height: 55, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10, 
    elevation: 3, 
    flex: 1, 
    marginRight: 5 
  },

  clearButton: { 
    backgroundColor: '#95A5A6', 
    marginLeft: 5, 
    marginRight: 0 
  },

  buttonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },

  resultContainer: { 
    marginTop: 40, 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#FFF', 
    borderRadius: 15, 
    elevation: 5 
  },

  resultValue: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    color: '#2F3640' 
  },

  resultText: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginTop: 5, 
    textAlign: 'center' 
  },
});
