import React from 'react';
import { LogBox, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux';
import Navigation from './src/navigation';
import { MenuProvider } from 'react-native-popup-menu';

const App = () => {
  return (
    <MenuProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </MenuProvider>
  );
};

export default App;
