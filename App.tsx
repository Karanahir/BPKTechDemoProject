import React from 'react';
import {StyleSheet} from 'react-native';
import StackNavigation from './Src/Navigation/StackNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import configureStore from './Src/Redux/Store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  const store = configureStore();
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.container}>
        <StackNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
