// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabLayout from './(tabs)/_layout'; // Adjust the import path accordingly

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <TabLayout /> {/* This is where the TabNavigator is rendered */}
    </NavigationContainer>
  );
};

export default App;
