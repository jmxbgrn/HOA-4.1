import React from 'react';
import { View, StyleSheet } from 'react-native';
import Status from './components/Status'; // Corrected import
import MessageList from './components/MessageList'; // Corrected import
import Toolbar from './components/Toolbar';
import ImageGrid from './components/InputMethodEditor';

const App = () => {
  return (
    <View style={styles.container}>
      <Status />
      <View style={styles.content}>
        <MessageList />
        <View style={styles.inputMethodEditor}>
          <ImageGrid />
        </View>
      </View>
      <View style={styles.toolbar}>
        <Toolbar />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  status: {
    zIndex: 1,
    // Define statusHeight or use a numeric value
    height: 50, // Replace with the desired height
  },
  content: {
    flex: 1,
    backgroundColor: '#FFB6C1',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    flex: 1,
    backgroundColor: '#e0218a',
  },
});
