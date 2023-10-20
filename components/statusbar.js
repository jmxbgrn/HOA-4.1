import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Platform } from 'react-native';

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: statusHeight,
  },
});

export default styles; // Export the styles if needed
