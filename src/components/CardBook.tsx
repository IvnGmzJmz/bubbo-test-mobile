import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CardBookHeader from './CardBookHeader';
import CardBookBody from './CardBookBody';
import { useNavigation } from '@react-navigation/native';
import DetailBookModal from './DetailBookModal';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  image: string;
  sinopsis: string;
  tryFetch: () => void;
}

export default function CardBook(props: BookCardProps) {
  const [isDetailBookModal, setisDetailBookModal] = useState(false);

  const openDetailModal = () => {
    setisDetailBookModal(true);
  };

  const closeDetailModal = () => {
    setisDetailBookModal(false);
  };

  return (
    <View>
        <TouchableOpacity onPress={() => openDetailModal()}>
          <View style={styles.card}>
            <CardBookHeader image={props.image}></CardBookHeader>
            <CardBookBody 
              id={props.id} 
              title={props.title} 
              author={props.author} 
              image={props.image}
              sinopsis={props.sinopsis}
              tryFetch={props.tryFetch}></CardBookBody>
          </View>
      </TouchableOpacity>
      <DetailBookModal bookData={props} isVisible={isDetailBookModal} onClose={closeDetailModal} />
    </View>



  );
}

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get('window').height * 0.3,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    margin: Dimensions.get('window').height * 0.01,
  },
});