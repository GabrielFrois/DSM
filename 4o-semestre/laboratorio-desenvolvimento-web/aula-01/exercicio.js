// Importa o React e o hook useState para gerenciamento de estado
import React, { useState } from 'react';

// Importa componentes básicos do React Native
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Componente principal da aplicação
export default function App() {

  // Estados para armazenar as notas digitadas (como texto)
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [nota4, setNota4] = useState('');

  // Estado para armazenar a média final calculada
  const [media, setMedia] = useState(null);

  // Estado para armazenar mensagens de erro
  const [erro, setErro] = useState('');

  // Função responsável por calcular a média ponderada
  const calcularMedia = () => {

    // Converte as notas de string para número
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    const n3 = parseFloat(nota3);
    const n4 = parseFloat(nota4);

    // Verifica se algum valor não é um número válido
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
      setErro("Por gentileza, insira números válidos!!!!");
      setMedia(null); // Limpa a média caso haja erro
      return; // Interrompe a execução da função
    }

    // Limpa a mensagem de erro se os dados forem válidos
    setErro('');

    // Calcula a média ponderada:
    // Nota 1 = 10%, Nota 2 = 10%, Nota 3 = 30%, Nota 4 = 50%
    const resultado = (
      (n1 * 0.1) +
      (n2 * 0.1) +
      (n3 * 0.3) +
      (n4 * 0.5)
    ).toFixed(2); // Limita o resultado a duas casas decimais

    // Atualiza o estado da média
    setMedia(resultado);
  };

  // Renderização da interface
  return (
    <View style={styles.container}>

      {/* Título da aplicação */}
      <Text style={styles.title}>Calculadora de Média</Text>

      {/* Campo de entrada da Nota 1 */}
      <TextInput
        style={styles.input}
        placeholder="Nota 1"
        keyboardType="numeric"
        value={nota1}
        onChangeText={setNota1}
      />

      {/* Campo de entrada da Nota 2 */}
      <TextInput
        style={styles.input}
        placeholder="Nota 2"
        keyboardType="numeric"
        value={nota2}
        onChangeText={setNota2}
      />

      {/* Campo de entrada da Nota 3 */}
      <TextInput
        style={styles.input}
        placeholder="Nota 3"
        keyboardType="numeric"
        value={nota3}
        onChangeText={setNota3}
      />

      {/* Campo de entrada da Nota 4 */}
      <TextInput
        style={styles.input}
        placeholder="Nota 4"
        keyboardType="numeric"
        value={nota4}
        onChangeText={setNota4}
      />

      {/* Botão que dispara o cálculo da média */}
      <Button title="Calcular Média" onPress={calcularMedia} />

      {/* Exibe a média somente se ela existir */}
      {media && <Text style={styles.result}>Média Final: {media}</Text>}

      {/* Exibe mensagem de erro, se houver */}
      {erro ? <Text style={styles.error}>{erro}</Text> : null}

    </View>
  );
}

// Estilos da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 20,
    backgroundColor: '#ecf0f1',
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    width: '50%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },

  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },

  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
});