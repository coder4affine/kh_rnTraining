import React from 'react';
import {View} from 'react-native';

const Picker = ({children}) => {
  return (
    <View
      style={{
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 4,
        margin: 10,
        fontSize: 18,
      }}>
      {children}
    </View>
  );
};

export default Picker;

{
  /* <RNPicker
        mode="dropdown"
        selectedValue={selectedValue.value}
        onValueChange={onValueChange}>
        {options.map(x => (
          <RNPicker.Item key={x.value} label={x.text} value={x.value} />
        ))}
      </RNPicker> */
}
