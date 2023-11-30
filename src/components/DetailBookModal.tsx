// EditBookModal.tsx

import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Book, DataModalProps } from '../Interfaces';



export default function DetailBookModal({ isVisible, onClose, bookData }: DataModalProps) {
  const [newBookData, setNewBookData] = useState<Book>({
    title: bookData.title,
    author: bookData.author,
    image: bookData.image, 
    sinopsis: bookData.sinopsis
  });


  return (
    <Modal visible={isVisible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={onClose}>
              <Image source={require('../assets/icons/close-icon.png')} style={styles.icon} />

          </TouchableOpacity>        
        </View>
        <View style={styles.detailHeader}>
          <View style={styles.detailHeaderImage}>
            <Image source={{ uri: newBookData.image}} style={styles.image} />

          </View>
          <View style={styles.detailHeaderInfo}>
            <Text style={styles.title}>{newBookData.title}</Text>
            <Text>{newBookData.author}</Text>
          </View>
        </View>
        <View style={styles.sinopsis}>
          <Text style={styles.sinopsisText}>{newBookData.sinopsis}</Text>
        </View>



      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  detailHeaderImage: {
    flex: 1,
  },
  detailHeaderInfo: {
    flex: 1
  },
  detailHeader: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.3,
  },
  sinopsis: {
    height: Dimensions.get('window').height * 0.7,
  },
  sinopsisText: {
    padding: 20
  },
  title: {
    fontSize: Dimensions.get('window').height*0.03,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('window').height*0.01,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  actionButtons: {
    flexDirection: 'row-reverse',
  },
  icon: {
    width: Dimensions.get('window').width * 0.03,
    height: Dimensions.get('window').height * 0.03, 
    marginHorizontal: Dimensions.get('window').width * 0.01,
    marginRight: 10,
    marginTop: 10,
    tintColor: 'grey'
  },
});
