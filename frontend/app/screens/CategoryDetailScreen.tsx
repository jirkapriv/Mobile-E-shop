// src/screens/CategoryDetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { getProductsInCategory } from '../models/Products'; // Make sure to import the correct function

interface Product {
  _id: string;
  name: string;
  description: string;
}

const CategoryDetailScreen: React.FC = ({ route }) => {
  const { categoryId } = route.params; // Retrieve categoryId passed from the previous screen
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const fetchProducts = async () => {
      try {
        const response = await getProductsInCategory(categoryId); // Fetch products by category ID
        if (response.status === 200) {
          setProducts(response.payload || []);
        } else {
          console.error('Failed to fetch products:', response.msg);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading products...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products in Category</Text>
      {products.length === 0 ? (
        <Text>No products available</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item, index) => (item._id || item.id || index).toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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

export default CategoryDetailScreen;
