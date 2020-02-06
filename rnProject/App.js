import React from 'react';
import {SafeAreaView, View, PixelRatio} from 'react-native';
import Image from 'react-native-fast-image';
import engaged from './assets/images/engaged/engaged.png';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        flex: 1,
      }}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
          priority: Image.priority.high,
        }}
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(60),
          width: PixelRatio.getPixelSizeForLayoutSize(60),
        }}
        onLoadEnd={() => {
          console.warn('high priority');
        }}
      />
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
          priority: Image.priority.low,
        }}
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(60),
          width: PixelRatio.getPixelSizeForLayoutSize(60),
        }}
        onLoadEnd={() => {
          console.warn('low priority');
        }}
      />
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
          priority: Image.priority.normal,
        }}
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(60),
          width: PixelRatio.getPixelSizeForLayoutSize(60),
        }}
        onLoadEnd={() => {
          console.warn('normal priority');
        }}
      />
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        }}
        style={{
          height: PixelRatio.getPixelSizeForLayoutSize(60),
          width: PixelRatio.getPixelSizeForLayoutSize(60),
        }}
      />
      <View style={{height: 100, width: 100, backgroundColor: 'red'}} />
      <View style={{height: 100, width: 100, backgroundColor: 'yellow'}} />
    </SafeAreaView>
  );
};

export default App;
