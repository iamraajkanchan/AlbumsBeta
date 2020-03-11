import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText="Albums!" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('AlbumsBeta', () => App);
