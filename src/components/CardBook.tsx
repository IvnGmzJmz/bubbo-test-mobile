import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CardBookHeader from './CardBookHeader';
import CardBookBody from './CardBookBody';
import DetailBookModal from './DetailBookModal';
import { BookCardProps } from '../Interfaces';

const ScreenHeight = Dimensions.get('window').height;

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
              onBookAction={props.onBookAction}></CardBookBody>
          </View>
      </TouchableOpacity>
      <DetailBookModal bookData={props} isVisible={isDetailBookModal} onClose={closeDetailModal} />
    </View>



  );
}

const styles = StyleSheet.create({
  card: {
    height: ScreenHeight * 0.3,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 20,
    margin: ScreenHeight * 0.01,
  },
});