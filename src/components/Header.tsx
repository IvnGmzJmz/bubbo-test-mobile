// components/Header.tsx

import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import CreateBookModal from './CreateBookModal';
import { HomeFetchInterface } from '../Interfaces';

const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;

export default function Header(props: HomeFetchInterface) {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const openCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalVisible(false);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}> Bubbook</Text>

      <TouchableOpacity style={styles.floatingButton} onPress={() => openCreateModal()}>
        <Image source={require('../assets/icons/add-icon.png')} style={styles.icon} />
      </TouchableOpacity>
      <CreateBookModal onCreateBook={props.onCreateBook} isVisible={isCreateModalVisible} onClose={closeCreateModal}></CreateBookModal>

    </View>
    
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: ScreenHeight*0.03,
    fontWeight: 'bold'
  },
  header: {
    height: ScreenHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10,
  },
  floatingButton: {
    borderRadius: 30,
    width: ScreenWidth*0.05,
    height: ScreenHeight*0.03,
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: 'grey'
  }
});