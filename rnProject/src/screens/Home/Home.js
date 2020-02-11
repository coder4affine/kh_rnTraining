import React from 'react';
import {Text, Button, ScrollView} from 'react-native';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <Text>Home Page</Text>
      <Button title="Go to Temp" onPress={() => navigation.navigate('Temp')} />
      <Button title="Open Modal" onPress={() => navigation.navigate('Modal')} />
    </ScrollView>
  );
};

export default Home;
