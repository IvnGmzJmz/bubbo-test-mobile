// En HomeScreen.tsx

import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import CardBook from '../components/CardBook';

interface Libro {
  titulo: string;
  autor: string;
  portada: string;
}

const libros: Libro[] = [
  // Datos de ejemplo
  {
    titulo: 'El nombre del viento',
    autor: 'Patrick Rothfuss',
    portada: 'https://m.media-amazon.com/images/I/51+ZMhywfIL._SY445_SX342_.jpg',
  },
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    portada: 'https://m.media-amazon.com/images/I/51+ZMhywfIL._SY445_SX342_.jpg',
  },
];

export default function HomeScreen(){
    return (
    <ScrollView>
        {libros.map((libro, index) => (
            <CardBook
                key={index}
                titulo={libro.titulo} 
                autor={libro.autor} 
                portada={libro.portada}                
            ></CardBook>
        ))}
    </ScrollView>
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
});