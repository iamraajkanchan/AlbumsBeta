import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, buttonText}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    paddingVertical: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginHorizontal: 5,
  },
});

export default Button;
