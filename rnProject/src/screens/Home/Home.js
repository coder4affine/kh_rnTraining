import React from 'react';
import {Text, Button, ScrollView, View, Platform} from 'react-native';
import Picker from '../../components/Picker';
import styles from './styles';
// import countries from '../../utils/countryList';

const countries = [
  {
    text: 'India',
    value: 'IN',
  },
  {
    text: 'USA',
    value: 'US',
  },
  {
    text: 'Canada',
    value: 'CA',
  },
  {
    text: 'Australia',
    value: 'AU',
  },
];

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <Text>Home Page</Text>
      <Button title="Go to Temp" onPress={() => navigation.navigate('Temp')} />
      <Button title="Open Modal" onPress={() => navigation.navigate('Modal')} />
      <View style={styles.boxStyle} />
      <Picker
        options={countries}
        onSelect={selectedVal => console.warn(selectedVal)}
      />
      {/* {Platform.OS === 'ios' && (
        <View>
          <TouchableOpacity onPress={() => setIsOpen(true)}>
            <View
              style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
              pointerEvents="none">
              <TextInput
                editable={false}
                value={countyName}
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
                      const selectedCountry = countries.find(
                        x => x.code === country,
                      );
                      setCountryName(selectedCountry.name);
                    }}
                  />
                </View>
                <Picker
                  mode="dropdown"
                  selectedValue={country}
                  onValueChange={itemValue => setCountry(itemValue)}>
                  {countries.map(x => (
                    <Picker.Item key={x.code} label={x.name} value={x.code} />
                  ))}
                </Picker>
              </View>
            </View>
          </Modal>
        </View>
      )}
      {Platform.OS === 'android' && (
        <View
          style={{
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 4,
            margin: 10,
            fontSize: 18,
          }}>
          <Picker
            mode="dropdown"
            selectedValue={country}
            onValueChange={itemValue => setCountry(itemValue)}>
            {countries.map(x => (
              <Picker.Item key={x.code} label={x.name} value={x.code} />
            ))}
          </Picker>
        </View>
      )} */}
    </ScrollView>
  );
};

export default Home;
