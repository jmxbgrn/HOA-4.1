import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MessageList = () => {
  return (
    <View style={styles.container}>
      <Text>Network Connectivity</Text>
      <Image source={require('./assets/image1.png')} style={styles.image} />
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
  },
  image: {
    width: 50, // Set the width as per your design
    height: 50, // Set the height as per your design
  },
});
