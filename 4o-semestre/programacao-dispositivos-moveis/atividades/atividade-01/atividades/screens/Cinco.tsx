import Constants from 'expo-constants';
import React from 'react';
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import logo from '../assets/images/splash-icon.png';

export default function ExercicioCinco() {
  const exibirAlerta = () => {
    Alert.alert('Mensagem', 'Boa noite!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <View style={styles.boxLime}>
          <TouchableOpacity onPress={exibirAlerta}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.ladoDireito}>
          <View style={styles.boxTeal}>
            <TouchableOpacity onPress={exibirAlerta}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
          <View style={styles.boxSkyblue}>
            <TouchableOpacity onPress={exibirAlerta}>
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.boxSalmon}>
        <TouchableOpacity onPress={exibirAlerta}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: Constants.statusBarHeight },
  topo: { flex: 0.5, flexDirection: 'row' },
  boxLime: { flex: 0.5, backgroundColor: 'lime', justifyContent: 'center', alignItems: 'center' },
  ladoDireito: { flex: 0.5 },
  boxTeal: { flex: 0.5, backgroundColor: 'teal', justifyContent: 'center', alignItems: 'center' },
  boxSkyblue: { flex: 0.5, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' },
  boxSalmon: { flex: 0.5, backgroundColor: 'salmon', justifyContent: 'center', alignItems: 'center' },
  logo: { flex: 1, alignItems: 'center', resizeMode: 'contain' },
});