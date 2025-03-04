// src/screens/ProductScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      {/* Render products here */}
      <Button title="Add to Cart" onPress={() => alert('Added to cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductScreen;
