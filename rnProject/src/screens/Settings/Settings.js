import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

const Settings = ({navigation}) => {
  return (
    <View>
      <Text>Settings Page</Text>
      <Button title="Pop To Top" onPress={() => navigation.popToTop()} />
      <Button
        title="Reset"
        onPress={() => {
          const resetAction = StackActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({routeName: 'Register'}),
              NavigationActions.navigate({routeName: 'Login'}),
            ],
          });
          navigation.dispatch(resetAction);
        }}
      />
    </View>
  );
};

export default Settings;
