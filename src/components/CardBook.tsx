// En BookCard.tsx

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface BookCardProps {
  titulo: string;
  autor: string;
  portada: string;
}

export default function CardBook (props: BookCardProps) {
    return (
        <TouchableOpacity onPress={()=>console.log('Detalle')}>
            <View style={styles.card}>
                <Image source={{ uri: props.portada }} style={styles.portada} />
                <View style={styles.infoContainer}>
                    <Text style={styles.titulo}>{props.titulo}</Text>
                    <Text style={styles.autor}>Autor: {props.autor}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>console.log('Editar')}>
                    <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>console.log('Eliminar')}>
                    <Text style={styles.buttonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  portada: {
    width: 100,
    height: 200,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  autor: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    flexDirection: 'row',
  },
  button: {
    marginLeft: 8,
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
  },
});
