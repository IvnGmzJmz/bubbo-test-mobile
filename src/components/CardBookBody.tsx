import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

interface BookCardBodyProps {
  titulo: string;
  autor: string;
}

export default function CardBookBody(props: BookCardBodyProps) {
  return (
    <View style={styles.cardBody}>
        <View style={styles.cardInfo}>
        <Text style={styles.titulo}>{props.titulo}</Text>
        <Text style={styles.autor}>{props.autor}</Text>
        </View>
        <View style={styles.cardButtons}>
        <TouchableOpacity
            onPress={() => console.log('Editar')}
        >
            <Image source={require('../assets/icons/edit-icon.png')} style={styles.icon} />

        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => console.log('Eliminar')}
        >
            <Image source={require('../assets/icons/remove-icon.png')} style={styles.icon} />

        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flex: 1,
  },
  cardBody: {
    flex: 2,
    flexDirection: 'column',
  },
  cardInfo: {
    flex: 4,
    padding: Dimensions.get('window').height * 0.01
  },
  titulo: {
    fontSize: Dimensions.get('window').height * 0.025,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: Dimensions.get('window').height * 0.02,
  },
  cardButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.03, 
    marginHorizontal: Dimensions.get('window').width * 0.01,
    tintColor: 'grey', 
  },
});