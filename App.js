import React from 'react';
import * as firebase from 'firebase';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, SafeAreaView } from 'react-native';

import AppNavigator from './src/AppNavigator';


export default class App extends React.Component {

  async componentWillMount() {
    await firebase.initializeApp({
      apiKey: "AIzaSyB0cGU_kM1Rz032OCcsyNUbobQcGc_do0Q",
      authDomain: "tiffin-f145e.firebaseapp.com",
      databaseURL: "https://tiffin-f145e.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "213842663706",
    });
  }

  render() {
    return (
        <PaperProvider>
          <SafeAreaView style={styles.container}>
            <AppNavigator />
          </SafeAreaView>
        </PaperProvider>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
