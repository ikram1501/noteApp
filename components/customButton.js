import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ backgroundColor, color, text, width, onPress, fontSize }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor, width }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, { color, fontSize }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '600',
  },
});

export default CustomButton;
