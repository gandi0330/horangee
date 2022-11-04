import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import store from './store/index';
import {Provider} from 'react-redux';

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  main: {
    width: '100%',
    height: '100%',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.outer}>
        <NavigationContainer>
          <View style={styles.main}>
            <StackNavigation />
          </View>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
