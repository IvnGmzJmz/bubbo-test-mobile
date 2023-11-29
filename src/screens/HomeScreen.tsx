// HomeScreen.tsx

import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import CardBook from '../components/CardBook';
import Header from '../components/Header';

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
    portada: 'https://m.media-amazon.com/images/I/91UNBSQddOL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    portada: 'https://m.media-amazon.com/images/I/91TvVQS7loL._AC_UF1000,1000_QL80_.jpg',
  },
];

export default function HomeScreen() {
  return (
    <View>
        <Header></Header>
        <ScrollView>
            {libros.map((libro, index) => (
                <CardBook
                key={index}
                titulo={libro.titulo}
                autor={libro.autor}
                portada={libro.portada}
                />
            ))}
        </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

// CardBook.tsx


