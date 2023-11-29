// EditBookModal.tsx

import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Button, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { apiService } from '../services/apiService';

interface Book {
  title: string;
  author: string;
  image: string;
}

interface CreateBookModal {
  isVisible: boolean;
  onClose: () => void;
}

export default function CreateBookModal({ isVisible, onClose }: CreateBookModal) {
  const [newBookData, setNewBookData] = useState<Book>({
    title: '',
    author: '',
    image: '', 
  });

  const handleSave = () => {

    apiService.createBook(newBookData)

    setNewBookData({
      title: '',
      author: '',
      image: '',
    });

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
