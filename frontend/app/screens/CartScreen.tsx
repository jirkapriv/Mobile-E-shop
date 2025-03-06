import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getCart } from '../models/Cart'; // Assuming you have a cart model for API calls

const CartScreen = () => {
  const [cart, setCart] = useState([]); // Store cart items here
  const mockUserId = 'mockUserId123'; // Using mock user ID for testing

  useEffect(() => {
    const fetchCart = async () => {
      const response = await getCart(mockUserId); // Pass mockUserId to the API
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
            {/* Optionally display more product details like name, price, etc. */}
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
