// EditBookModal.tsx

import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Book, DataModalProps } from '../Interfaces';


const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export default function DetailBookModal({ isVisible, onClose, bookData }: DataModalProps) {


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
            <Image source={{ uri: bookData.image}} style={styles.image} />

          </View>
          <View style={styles.detailHeaderInfo}>
            <Text style={styles.title}>{bookData.title}</Text>
            <Text>{bookData.author}</Text>
          </View>
        </View>
        <View style={styles.sinopsis}>
          <Text style={styles.sinopsisText}>{bookData.sinopsis}</Text>
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
    height: ScreenHeight * 0.3,
  },
  sinopsis: {
    height: ScreenHeight * 0.7,
  },
  sinopsisText: {
    padding: 20
  },
  title: {
    fontSize: ScreenHeight*0.03,
    fontWeight: 'bold',
    marginBottom: ScreenHeight*0.01,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  actionButtons: {
    flexDirection: 'row-reverse',
  },
  icon: {
    width: ScreenWidth * 0.04,
    height: ScreenHeight * 0.03, 
    marginHorizontal: ScreenWidth * 0.01,
    marginRight: 10,
    marginTop: 10,
    tintColor: 'grey'
  },
});
