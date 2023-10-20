import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

const Toolbar = () => {
  return (
    <View style={styles.container}>
      <Button title="Text" key="textButton" />
      <Button title="Image" key="imageButton" />
      <Button title="Location" key="locationButton" />
      <TextInput placeholder="Type your message here" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-between', // Distribute buttons evenly
    paddingHorizontal: 16, // Add some horizontal spacing
    alignItems: 'center', // Center items vertically
  },
});

export default Toolbar;
