import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ExercicioTres() {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        {/* Lado Esquerdo */}
        <View style={styles.boxLime} />
        
        {/* Lado Direito dividido em dois */}
        <View style={styles.ladoDireito}>
          <View style={styles.boxTeal} />
          <View style={styles.boxSkyblue} />
        </View>
      </View>

      <View style={styles.boxSalmon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  topo: {
    flex: 0.5,
    flexDirection: 'row', // Divide esquerda e direita
  },
  boxLime: {
    flex: 0.5,
    backgroundColor: 'lime',
  },
  ladoDireito: {
    flex: 0.5,
    flexDirection: 'column', // Divide em cima e baixo
  },
  boxTeal: {
    flex: 0.5,
    backgroundColor: 'teal',
  },
  boxSkyblue: {
    flex: 0.5,
    backgroundColor: 'skyblue',
  },
  boxSalmon: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});