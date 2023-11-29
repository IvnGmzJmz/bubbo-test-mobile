import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CardBookHeader from './CardBookHeader';
import CardBookBody from './CardBookBody';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  tryFetch: () => void;
}

export default function CardBook(props: BookCardProps) {
  return (
    <TouchableOpacity onPress={() => console.log('Detalle')}>
      <View style={styles.card}>
        <CardBookHeader image={props.image}></CardBookHeader>
        <CardBookBody id={props.id} title={props.title} author={props.author} tryFetch={props.tryFetch}></CardBookBody>
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