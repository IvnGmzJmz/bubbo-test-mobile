// components/Header.tsx

import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}> Bubbook</Text>

      <TouchableOpacity style={styles.floatingButton} onPress={() => console.log('Botón presionado')}>
        <Image source={require('../assets/icons/add-icon.png')} style={styles.icon} />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  header: {
    height: Dimensions.get('window').height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
  },
  floatingButton: {
    borderRadius: 30,
    width: 30,
    height: 30,
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