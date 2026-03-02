import Constants from 'expo-constants';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import logo from '../assets/images/splash-icon.png';

export default function ExercicioQuatro() {
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <View style={styles.boxLime}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style={styles.ladoDireito}>
                    <View style={styles.boxTeal}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <View style={styles.boxSkyblue}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                </View>
            </View>

            <View style={styles.boxSalmon}>
                <Image source={logo} style={styles.logo} />
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