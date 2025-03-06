import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// HomeStack now includes ProductDetailScreen and CategoryDetailScreen
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{
          title: "Categories", // Set header title for HomePage (Categories screen)
        }}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetailScreen}
        options={{
          title: "Products", // Set header title for CategoryDetail screen
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: "Product Details", // Set header title for ProductDetail screen
        }}
      />
    </Stack.Navigator>
  );
};

const TabLayout: React.FC = () => {
  return (
    <Tab.Navigator>
      {/* Categories tab now linked to HomeStack */}
      <Tab.Screen
        name="FoodDash"
        component={HomeStack}
        options={{
          tabBarLabel: "FoodDash", // Set the label for the Categories tab
          tabBarStyle: { display: 'flex' }, // Ensure the tab bar is displayed
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart", // Label for the Cart tab
          tabBarStyle: { display: 'flex' }, // Ensure the Cart tab is displayed
        }}
      />
    </Tab.Navigator>
  );
};

export default TabLayout;
