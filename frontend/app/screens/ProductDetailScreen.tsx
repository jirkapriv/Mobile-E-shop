import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image, Button } from "react-native";
import { getProductById } from "../models/Products"; // Function to fetch a single product
import { addToCart } from "../models/Cart"; // Function to add products to the cart

const ProductDetailScreen: React.FC = ({ route }) => {
  const { productId } = route.params; // Get product ID from navigation params
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId); // Fetch product details
        if (response.status === 200) {
          setProduct(response.payload);
        } else {
          setError(response.msg || "Failed to load product details.");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("An error occurred while fetching product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Call the function to add the product to the cart
      alert(`${product.name} has been added to your cart!`);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading product details...</Text>
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
      {product?.imageUrl && <Image source={{ uri: product.imageUrl }} style={styles.image} />}
      <Text style={styles.title}>{product?.name}</Text>
      <Text style={styles.description}>{product?.description}</Text>
      <Text style={styles.price}>Price: ${product?.price}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} /> {/* Add to Cart button */}
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
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default ProductDetailScreen;
