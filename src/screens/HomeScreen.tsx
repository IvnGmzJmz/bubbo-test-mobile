// HomeScreen.tsx

import React, { useEffect, useState } from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import CardBook from '../components/CardBook';
import Header from '../components/Header';
import { apiService } from '../services/apiService';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  sinopsis: string;
}

export default function HomeScreen() {
  const [books, setBooks] = useState<any[]>([]);
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    // Ejemplo de cómo usar el servicio para obtener la lista de libros al cargar la pantalla


    tryFetch();
  }, []);

  const getBooksApi = async () => {
    try {
      const newBooks = await apiService.getBooks();
      return newBooks;
    } catch (error) {
      console.error('Error al obtener la lista de libros:', error);
      return [];
    }
  };
  

  const tryFetch = async () => {
    const newBooks = await getBooksApi();
    setBooks(newBooks);
  };
  

  return (
    
    <View>
        <Header onCreateBook={tryFetch}></Header>
        
        <ScrollView style={{maxHeight:Dimensions.get('window').height * 0.85}} bounces={false}>
            {books.map((book, index) => (
                <CardBook
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  image={book.image}
                  sinopsis={book.sinopsis}
                  onBookAction={tryFetch}
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


