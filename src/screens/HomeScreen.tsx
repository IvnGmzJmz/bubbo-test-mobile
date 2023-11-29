// HomeScreen.tsx

import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import CardBook from '../components/CardBook';
import Header from '../components/Header';
import { apiService } from '../services/apiService';
import CreateBookModal from '../components/CreateBookModal';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
}

export default function HomeScreen() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    // Ejemplo de cómo usar el servicio para obtener la lista de libros al cargar la pantalla


    getBooksApi();
  }, []);

  const getBooksApi = async () => {
    try {
      const books = await apiService.getBooks();
      console.log(books)
      setBooks(books)
    } catch (error) {
      console.error('Error al obtener la lista de libros:', error);
    }
  };

  const tryFetch = async () => {
    await getBooksApi()
  };

  return (
    
    <View>
        <Header homeFetch={tryFetch}></Header>
        
        <ScrollView style={{maxHeight:Dimensions.get('window').height * 0.85}} bounces={false}>
            {books.map((book, index) => (
                <CardBook
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  image={book.image}
                  tryFetch={tryFetch}
                />
            ))}
        </ScrollView>
    </View>

  );
}


function addBook() {
  throw new Error('Function not implemented.');
}
// CardBook.tsx


