// EditBookModal.tsx

import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Button, TextInput, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { apiService } from '../services/apiService';
import { Book, CreateBookModal as BookModal } from '../Interfaces';



export default function CreateBookModal({ isVisible, onClose }: BookModal) {
  const [newBookData, setNewBookData] = useState<Book>({
    title: '',
    author: '',
    image: '', 
    sinopsis: ''
  });

  const handleSave = () => {

    apiService.createBook(newBookData)

    setNewBookData({
      title: '',
      author: '',
      image: '',
      sinopsis: ''
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
    fontSize: Dimensions.get('window').height*0.04,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('window').height*0.04,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: Dimensions.get('window').height*0.08,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: Dimensions.get('window').height*0.02,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 15,
  },
  inputArea: {
    height: Dimensions.get('window').height*0.1,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: Dimensions.get('window').height*0.02,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 15,
  },
  actionButtons: {
    flexDirection: 'row',
  },
});
