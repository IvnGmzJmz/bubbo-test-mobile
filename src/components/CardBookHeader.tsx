import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface BookCardHeaderProps {
    portada: string;
}

export default function CardBookHeader(props: BookCardHeaderProps) {
  return (
    <View style={styles.cardHeader}>
        <Image source={{ uri: props.portada }} style={styles.portada} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flex: 1,
  },
  portada: {
    width: '100%',
    height: '100%',
  },
});