import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {Navigator} from './src/navigator/Navigator';
import {Tabs} from './src/navigator/Tabs';
import {Provider} from 'react-redux';
import Store from './src/Store';

export const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {/* <Navigator /> */}
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
