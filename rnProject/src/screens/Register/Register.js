import React from 'react';
import {SafeAreaView} from 'react-native';
import FormikTextInput from '../../components/TextInput/FormikTextInput';
import Form from '../../components/Form/Form';

const registerFields = [
  {
    value: '',
    component: FormikTextInput,
    name: 'name',
    placeholder: 'Name',
    validate: val => {
      let error = '';
      if (!val) {
        error = 'Required...';
      }
      return error;
    },
  },
  {
    value: '',
    component: FormikTextInput,
    name: 'username',
    placeholder: 'Username',
    validate: val => {
      let error = '';
      if (!val) {
        error = 'Required...';
      }
      return error;
    },
  },
  {
    value: '',
    component: FormikTextInput,
    name: 'password',
    placeholder: 'Password',
    validate: val => {
      let error = '';
      if (!val) {
        error = 'Required...';
      }
      return error;
    },
  },
  {
    value: '',
    component: FormikTextInput,
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    validate: val => {
      let error = '';
      if (!val) {
        error = 'Required...';
      }
      return error;
    },
  },
  {
    value: '',
    component: FormikTextInput,
    name: 'zipcode',
    placeholder: 'Zipcode',
    maxLength: 8,
    keyboardType: 'numeric',
    validate: val => {
      let error = '';
      if (!val) {
        error = 'Required...';
      }
      return error;
    },
  },
];

const loginFields = [
  {
    value: '',
    component: FormikTextInput,
    name: 'username',
    placeholder: 'Username',
    validate: val => {
      let error = '';
      if (!val) {
        error = 'Required...';
      }
      return error;
    },
  },
  {
    value: '',
    component: FormikTextInput,
    name: 'password',
    placeholder: 'Password',
    validate: val => {
      let error = '';
      if (!val) {
        error = 'Required...';
      }
      return error;
    },
  },
];

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
      <Form
        fields={registerFields}
        onSubmit={val => navigation.replace('Settings')}
        buttonTitle="Register"
      />
      {/* <Form
        fields={loginFields}
        onSubmit={val => console.warn(val)}
        buttonTitle="Login"
      /> */}
    </SafeAreaView>
  );
};

export default Register;

// // const RegisterSchema = Yup.object().shape({
// //   name: Yup.string()
// //     .min(2, 'Too Short!')
// //     .max(50, 'Too Long!')
// //     .required('Required'),
// //   username: Yup.string()
// //     .min(2, 'Too Short!')
// //     .max(50, 'Too Long!')
// //     .required('Required')
// //     .email('enter valid email address'),
// // });

// const Register = () => {
//   return (
//     <SafeAreaView>
//       <Formik
//         initialValues={registerFields.reduce(
//           (p, c) => ({...p, [c.name]: c.value}),
//           {},
//         )}
//         onSubmit={values => {
//           console.warn(JSON.stringify(values));
//         }}
//         // validationSchema={RegisterSchema}
//       >
//         {({values, handleBlur, handleChange, handleSubmit}) => (
//           <View>
//             {registerFields.map(field => (
//               <Field {...field} />
//             ))}
//             {/* <Field component={FormikTextInput} name="name" placeholder="Name" />
//             <Field
//               component={FormikTextInput}
//               name="username"
//               placeholder="Username"
//             />
//             <Field
//               component={FormikTextInput}
//               name="password"
//               placeholder="Password"
//             />
//             <Field
//               component={FormikTextInput}
//               name="confirmPassword"
//               placeholder="Confirm Password"
//             /> */}
//             {/*
//             <TextInput
//               placeholder="Username"
//               value={values.username}
//               onChangeText={handleChange('username')}
//               onBlur={handleBlur('username')}
//             />
//             <ErrorMessage name="username">
//               {msg => <Text style={{color: 'red'}}>{msg}</Text>}
//             </ErrorMessage>
//             <TextInput
//               placeholder="Password"
//               value={values.password}
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//             />
//             <TextInput
//               placeholder="Conform Password"
//               value={values.confirmPassword}
//               onChangeText={handleChange('confirmPassword')}
//               onBlur={handleBlur('confirmPassword')}
//             /> */}
//             <Button title="Register" onPress={handleSubmit} />
//           </View>
//         )}
//       </Formik>
//     </SafeAreaView>
//   );
// };

// export default Register;
