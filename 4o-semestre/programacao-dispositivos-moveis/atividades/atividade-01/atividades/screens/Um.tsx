import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Um: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Metade Superior */}
      <View style={styles.boxCrimson} />
      
      {/* Metade Inferior */}
      <View style={styles.boxSalmon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira
    flexDirection: 'column', // Posiciona os filhos um abaixo do outro
    paddingTop: Constants.statusBarHeight, // Desloca o conteúdo para baixo da StatusBar
  },
  boxCrimson: {
    flex: 0.5, // Ocupa 50% do espaço disponível
    backgroundColor: 'crimson',
  },
  boxSalmon: {
    flex: 0.5, // Ocupa os outros 50%
    backgroundColor: 'salmon',
  },
});

export default Um;