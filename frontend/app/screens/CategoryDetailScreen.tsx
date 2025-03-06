import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getProductsByCategory } from "../models/Products"; // Function to fetch products

interface Product {
  _id: string;
  name: string;
  description: string;
}

const CategoryDetailScreen: React.FC = ({ route }) => {
  const { categoryId } = route.params;
  const navigation = useNavigation(); // Hook to navigate
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProductsByCategory(categoryId);
        if (response.status === 200) {
          setProducts(response.payload || []);
        } else {
          setError(response.msg || "Failed to load products.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("An error occurred while fetching products.");
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

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {products.length === 0 ? (
        <Text>No products available</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
<TouchableOpacity
  style={styles.item}
  onPress={() => navigation.navigate("ProductDetail", { productId: item._id })}
>
  <Text style={styles.itemTitle}>{item.name}</Text>
  <Text>{item.description}</Text>
</TouchableOpacity>

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
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default CategoryDetailScreen;
