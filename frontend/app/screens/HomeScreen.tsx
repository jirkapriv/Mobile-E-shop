// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getCategories } from '../models/Categories'; // assuming the model gets categories

interface Category {
  _id: string;
  name: string;
}

const HomeScreen: React.FC = ({ navigation }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        if (response.status === 200) {
          setCategories(response.payload || []);
        } else {
          console.error('Failed to fetch categories:', response.msg);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading categories...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {categories.length === 0 ? (
        <Text>No categories found</Text>
      ) : (
        <FlatList
          data={categories}
          keyExtractor={(item, index) => (item._id || item.id || index).toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('CategoryDetail', { categoryId: item._id })} // Navigate to CategoryDetail screen
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
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

export default HomeScreen;
