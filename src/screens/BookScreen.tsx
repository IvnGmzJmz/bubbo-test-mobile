// HomeScreen.tsx

import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';
import CardBook from '../components/CardBook';
import Header from '../components/Header';

interface BookPageProps {
    title: string;
    author: string;
    image: string;
  }

export default function HomeScreen(props:BookPageProps) {
  return (
    
    <View>
        <Image source={{ uri: props.image}} style={styles.image} />
        <Text>{props.title}</Text>
        <Text>{props.author}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
    image: {}

})
// CardBook.tsx


