import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const Button = ({containerStyle, buttonStyle, textStyle, title, ...rest}) => {
  return (
    <TouchableHighlight
      style={[styles.container, containerStyle]}
      underlayColor="rgba(0,255,255, 0.9)"
      {...rest}>
      <View style={[styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
