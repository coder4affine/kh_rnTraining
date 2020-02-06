import React from 'react';
import {TextInput as RNTextInput} from 'react-native';
import styles from './styles';

const TextInput = ({disable, style, passRef, ...rest}) => {
  return (
    <RNTextInput
      ref={passRef}
      style={[styles.textInput, disable ? styles.disable : null, style]}
      {...rest}
      //   secureTextEntry={secureTextEntry}
      //   placeholder={placeholder}
      //   value={value}
    />
  );
};

// const TextInput = props => {
//   return (
//     <RNTextInput
//       style={[
//         styles.textInput,
//         props.disable ? styles.disable : null,
//         props.style,
//       ]}
//     />
//   );
// };

export default TextInput;
