// EditBookModal.tsx

import React, { useState } from 'react';
import { Modal, View, Text, Button, TextInput, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { apiService } from '../services/apiService';
import { Book, CreateBookModal as BookModal } from '../Interfaces';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export default function CreateBookModal({ isVisible, onClose,onCreateBook }: BookModal) {
  const [newBookData, setNewBookData] = useState<Book>({
    title: '',
    author: '',
    image: '', 
    sinopsis: ''
  });

  const handleSave = () => {

    if (!newBookData.title || !newBookData.author || !newBookData.image) {
      console.error('Por favor, complete los campos obligatorios.');
      return;
    }

    apiService.createBook(newBookData)

    setNewBookData({
      title: '',
      author: '',
      image: '',
      sinopsis: ''
    });
    
    onCreateBook();
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <Text style={styles.title}>Create Book</Text>
        
        <TextInput
          placeholder="Title"
          value={newBookData.title}
          onChangeText={(text) => setNewBookData({ ...newBookData, title: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Author"
          value={newBookData.author}
          onChangeText={(text) => setNewBookData({ ...newBookData, author: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Image URL"
          value={newBookData.image}
          onChangeText={(text) => setNewBookData({ ...newBookData, image: text })}
          style={styles.input}
        />

        <TextInput
          placeholder="Sinopsis"
          multiline
          value={newBookData.sinopsis}
          onChangeText={(text) => setNewBookData({ ...newBookData, sinopsis: text })}
          style={styles.inputArea}
        />

        <View style={styles.actionButtons}>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: ScreenHeight*0.04,
    fontWeight: 'bold',
    marginBottom: ScreenHeight*0.04,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: ScreenHeight*0.08,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: ScreenHeight*0.02,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 15,
  },
  inputArea: {
    height: ScreenHeight*0.1,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: ScreenHeight*0.02,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 15,
  },
  actionButtons: {
    flexDirection: 'row',
  },
});
