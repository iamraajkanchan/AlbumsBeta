import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({headerText}) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
};

// https://flatuicolors.com/

const styles = StyleSheet.create({
  headerStyle: {
    // backgroundColor: '#e74c3c',
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    // color: '#ffffff',
  },
});

export default Header;
