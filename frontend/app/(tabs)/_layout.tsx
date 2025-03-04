// (tabs)/_layout.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// HomeStack Navigator that contains the Home and CategoryDetail screens
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
    </Stack.Navigator>
  );
};

// TabLayout component with Tab.Navigator
const TabLayout: React.FC = () => {
  return (
    <Tab.Navigator>
      {/* HomeStack should be passed as a component */}
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default TabLayout;
