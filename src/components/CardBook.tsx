import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

interface BookCardProps {
  titulo: string;
  autor: string;
  portada: string;
}

export default function CardBook(props: BookCardProps) {
  return (
    <TouchableOpacity onPress={() => console.log('Detalle')}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image source={{ uri: props.portada }} style={styles.portada} />
        </View>
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
  cardHeader: {
    flex: 1,
  },
  portada: {
    width: '100%',
    height: '100%',
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
  button: {
    marginLeft: Dimensions.get('window').height * 0.01,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
  icon: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.03, 
    marginHorizontal: Dimensions.get('window').width * 0.01,
    tintColor: 'grey', 
  },
});