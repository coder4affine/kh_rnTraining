import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

const Temp = ({navigation}) => {
  return (
    <View>
      <Text>Temp Screen</Text>
      <Button
        title="Reset Route"
        onPress={() => {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})],
          });
          navigation.dispatch(resetAction);
        }}
      />
    </View>
  );
};

export default Temp;
