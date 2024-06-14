import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
  placeholder,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={onChange}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#203239',
  },
  input: {
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
    color: '#203239',
  },
});

export default CustomTextInput;
