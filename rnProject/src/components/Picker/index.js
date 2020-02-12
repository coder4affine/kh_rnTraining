import React, {useState} from 'react';
import {Picker as RNPicker, Platform} from 'react-native';
import Picker from './Picker';

const Index = ({options, onSelect, textKey = 'text', valueKey = 'value'}) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  return (
    <Picker
      selectedValue={selectedValue[textKey]}
      onSelect={() => {
        if (Platform.OS === 'ios') {
          onSelect(selectedValue);
        }
      }}>
      <RNPicker
        mode="dropdown"
        selectedValue={selectedValue[valueKey]}
        onValueChange={itemValue => {
          const selectedOption = options.find(x => x[valueKey] === itemValue);
          setSelectedValue(selectedOption);
          if (Platform.OS === 'android') {
            onSelect(selectedOption);
          }
        }}>
        {options.map(x => (
          <RNPicker.Item
            key={x[valueKey]}
            label={x[textKey]}
            value={x[valueKey]}
          />
        ))}
      </RNPicker>
    </Picker>
  );
};

export default Index;
