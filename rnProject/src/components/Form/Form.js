import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Button from '../../components/Button/Button';
import {Formik, Field} from 'formik';

const Form = ({fields, buttonTitle, ...props}) => {
  return (
    <SafeAreaView>
      <Formik
        initialValues={fields.reduce((p, c) => ({...p, [c.name]: c.value}), {})}
        {...props}>
        {({values, handleBlur, handleChange, handleSubmit}) => (
          <View>
            {fields.map(field => (
              <Field key={field.name} {...field} />
            ))}
            <Button title={buttonTitle} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Form;
