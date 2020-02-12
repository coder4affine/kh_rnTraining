import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  boxStyle: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'blue',
      },
    }),
    height: 100,
    width: 100,
  },
});

export default styles;
