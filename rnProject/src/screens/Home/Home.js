import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Go to Temp" onPress={() => navigation.navigate('Temp')} />
    </View>
  );
};

export default Home;
