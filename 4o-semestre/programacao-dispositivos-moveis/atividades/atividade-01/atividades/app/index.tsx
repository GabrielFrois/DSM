import Cinco from '@/screens/Cinco';
import React from 'react';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      {/* Esconde a barra de status do dispositivo */}
      <StatusBar hidden={true} />
      <Cinco />
    </>
  );
}