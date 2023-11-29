import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface BookCardHeaderProps {
    image: string;
}

export default function CardBookHeader(props: BookCardHeaderProps) {
  return (
    <View style={styles.cardHeader}>
        <Image source={{ uri: props.image}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});