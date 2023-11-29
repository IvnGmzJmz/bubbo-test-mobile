// components/Header.tsx

import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: Dimensions.get('window').height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.7,
    resizeMode: 'contain',
  },
});
