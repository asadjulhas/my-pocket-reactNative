import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Components/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* components */
import AddTransaction from './src/Components/AddTransaction';
/* redux */
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'My Pocket'
        }} />
        <Stack.Screen name="Add" component={AddTransaction} options={{
          title: 'Add expense'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;

