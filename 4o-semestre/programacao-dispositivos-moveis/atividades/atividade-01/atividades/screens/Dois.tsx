import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Dois() {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        {/* Lado Esquerdo */}
        <View style={styles.boxLime} />
        <View style={styles.boxAquamarine} />
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
  boxAquamarine: {
    flex: 0.5,
    backgroundColor: 'aquamarine',
  },

  boxSalmon: {
    flex: 0.5,
    backgroundColor: 'salmon',
  },
});