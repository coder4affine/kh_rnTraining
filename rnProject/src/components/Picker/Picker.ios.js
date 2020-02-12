import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Button,
  Picker as RNPicker,
  TextInput,
} from 'react-native';
import ArrowDownIcon from '../../assets/icons/arrow_drop_down.svg';

const Picker = ({children, selectedValue, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    setText(selectedValue);
  }, [selectedValue]);
  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <View
          style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
          pointerEvents="none">
          <TextInput
            editable={false}
            value={text}
            style={{
              flex: 1,
              borderColor: 'gray',
              borderWidth: 0.5,
              borderRadius: 4,
              paddingHorizontal: 8,
              paddingVertical: 10,
              margin: 10,
              fontSize: 18,
            }}
          />
          <ArrowDownIcon
            style={{
              position: 'absolute',
              right: 20,
            }}
            height={30}
            width={30}
          />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          console.warn('Modal has been closed.');
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View
            style={{
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Button title="Close" onPress={() => setIsOpen(false)} />
              <Button
                title="Select"
                onPress={() => {
                  setIsOpen(false);
                  setText(selectedValue);
                  onSelect();
                }}
              />
            </View>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Picker;
