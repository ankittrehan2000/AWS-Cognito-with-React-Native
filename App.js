import Amplify, { Auth } from 'aws-amplify';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';

Amplify.configure({
  Auth: {
    identityPoolId: '',
    region: '',
    userPoolId: '',
    userPoolWebClientId: '',
  }
});

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

import { withAuthenticator } from 'aws-amplify-react-native';
const signUpConfig = {
  header: 'Customized Sign Up',
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'User Name',
      key: 'preferred_username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 4,
      type: 'string'
    },
    {
      label: 'Gender',
      key: 'gender',
      required: true,
      displayOrder: 5,
      type: 'string'
    },
    {
      label: 'Ethnicity',
      key: 'custom:ethnicity',
      required: true,
      displayOrder: 6,
      type: 'string'
    }
  ]
};
const usernameAttributes = 'User Name';

export default withAuthenticator(App, {
  signUpConfig,
  usernameAttributes,
  includeGreetings: true
});