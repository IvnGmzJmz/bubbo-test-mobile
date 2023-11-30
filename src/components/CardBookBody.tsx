import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { apiService } from '../services/apiService';
import EditBookModal from './EditBookModal';
import { BookCardProps } from '../Interfaces';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export default function CardBookBody(props: BookCardProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const openEditModal = () => {
    setIsEditModalVisible(true);
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false);
  };

  return (
    <View style={styles.cardBody}>
        <View style={styles.cardInfo}>
          <Text style={styles.titulo}>{props.title}</Text>
          <Text style={styles.autor}>{props.author}</Text>
        </View>
        <View style={styles.cardButtons}>
        <TouchableOpacity
            onPress={() => openEditModal()}>
            <Image source={require('../assets/icons/edit-icon.png')} style={styles.icon} />

        </TouchableOpacity>
        <TouchableOpacity
            onPress={async () => {
                await apiService.deleteBook(props.id)
                props.onBookAction()
              }
            }>
            <Image source={require('../assets/icons/remove-icon.png')} style={styles.icon} />

        </TouchableOpacity>
        </View>
        <EditBookModal bookData={props} isVisible={isEditModalVisible} onClose={closeEditModal} />

    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flex: 1,
  },
  cardBody: {
    flex: 2,
    flexDirection: 'column',
  },
  cardInfo: {
    flex: 4,
    padding: ScreenHeight * 0.01
  },
  titulo: {
    fontSize: ScreenHeight * 0.025,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: ScreenHeight * 0.02,
  },
  cardButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    width: ScreenWidth * 0.05,
    height: ScreenHeight * 0.03, 
    marginHorizontal: ScreenWidth * 0.01,
    tintColor: 'grey', 
  },
});