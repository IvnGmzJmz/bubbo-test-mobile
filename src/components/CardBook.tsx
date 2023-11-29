import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CardBookHeader from './CardBookHeader';
import CardBookBody from './CardBookBody';

interface BookCardProps {
  titulo: string;
  autor: string;
  portada: string;
}

export default function CardBook(props: BookCardProps) {
  return (
    <TouchableOpacity onPress={() => console.log('Detalle')}>
      <View style={styles.card}>
        <CardBookHeader portada={props.portada}></CardBookHeader>
        <CardBookBody titulo={props.titulo} autor={props.autor}></CardBookBody>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get('window').height * 0.3,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    margin: Dimensions.get('window').height * 0.01,
  },
});