import React from 'react';
import {View, Text} from 'react-native';
import TextInput from './TextInput';
import {ErrorMessage} from 'formik';

const FormikTextInput = ({
  field: {name, value},
  form: {touched, errors, handleChange, handleBlur}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <View>
      <TextInput
        {...props}
        name={name}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
      <ErrorMessage name={name}>
        {msg => <Text style={{color: 'red'}}>{msg}</Text>}
      </ErrorMessage>
    </View>
  );
};

export default FormikTextInput;
