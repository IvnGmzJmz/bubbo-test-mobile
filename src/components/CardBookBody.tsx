import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { apiService } from '../services/apiService';
import EditBookModal from './EditBookModal';

interface BookCardBodyProps {
  id: string,
  title: string;
  author: string;
  image: string;
  sinopsis:string;
  tryFetch: () => void;
}


export default function CardBookBody(props: BookCardBodyProps) {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const openEditModal = () => {
    setIsEditModalVisible(true);
  };

  const closeEditModal = () => {
    props.tryFetch();
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
                props.tryFetch()
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
    padding: Dimensions.get('window').height * 0.01
  },
  titulo: {
    fontSize: Dimensions.get('window').height * 0.025,
    fontWeight: 'bold',
  },
  autor: {
    fontSize: Dimensions.get('window').height * 0.02,
  },
  cardButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.03, 
    marginHorizontal: Dimensions.get('window').width * 0.01,
    tintColor: 'grey', 
  },
});