// EditBookModal.tsx

import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Button, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { apiService } from '../services/apiService';

interface Book {
  title: string;
  author: string;
  portada: string;
}

interface EditBookModalProps {
  isVisible: boolean;
  onClose: () => void;
  bookData: any;
}

export default function EditBookModal({ isVisible, onClose, bookData }: EditBookModalProps) {
  const [newBookData, setNewBookData] = useState<Book>({
    title: bookData.title,
    author: bookData.author,
    portada: '', 
  });

  const handleSave = () => {

    apiService.updateBook(bookData.id,newBookData)

    setNewBookData({
      title: newBookData.title,
      author: newBookData.author,
      portada: '',
    });
    
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <Text style={styles.title}>Edit Book</Text>
        
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
          value={newBookData.portada}
          onChangeText={(text) => setNewBookData({ ...newBookData, portada: text })}
          style={styles.input}
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 15,
  },
  actionButtons: {
    flexDirection: 'row',
  },
});
