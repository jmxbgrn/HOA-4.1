import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';

const Status = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e0218a" barStyle="light-content" />
      <Text>Network Connectivity</Text>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
  },
});
