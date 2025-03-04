// src/screens/CartScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getCart } from '../models/Cart'; // Assuming you have a cart model for API calls

interface CartItem {
  productId: string;
  quantity: number;
}

const CartScreen: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const userId = 'mockUserId123'; // Replace with actual user ID

  useEffect(() => {
    const fetchCart = async () => {
      const response = await getCart(userId);
      if (response.status === 200) {
        setCart(response.payload.items); // Assuming cart payload contains items
      }
    };

    fetchCart();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{`Product: ${item.productId} | Quantity: ${item.quantity}`}</Text>
          </View>
        )}
      />
      <Button title="Checkout" onPress={() => alert('Checkout clicked')} />
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CartScreen;
