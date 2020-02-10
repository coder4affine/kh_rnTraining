import React, {useEffect} from 'react';
import {View, Text, AsyncStorage} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // const checkAuth = async () => {
    //   try {
    //     const token = await AsyncStorage.getItem('token');
    //     if (token) {
    //       navigation.navigate('App');
    //     } else {
    //       navigation.navigate('Auth');
    //     }
    //   } catch (error) {
    //     navigation.navigate('Auth');
    //   }
    // };
    // checkAuth();
    navigation.navigate('App');
  }, [navigation]);

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
