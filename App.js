import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AppNavigator from './src/AppNavigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
