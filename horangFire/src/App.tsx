import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/Stack';
import SplashScreen from 'react-native-splash-screen';

import Sound from 'react-native-sound';

Sound.setCategory('SoloAmbient');

const sound = new Sound('example_sound.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('로드 실패', error);
    return;
  }
  // if loaded successfully
  console.log('재생 시간 : ' + sound.getDuration());

  sound.play(success => {
    if (success) {
      console.log('재생 완료');
    } else {
      console.log('재생 실패');
    }
  });

  sound.setNumberOfLoops(-1);
});

export default function App() {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <View style={styles.outer}>
      <NavigationContainer>
        <View style={styles.main}>
          <StackNavigation />
        </View>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  main: {
    width: '100%',
    height: '100%',
  },
});
