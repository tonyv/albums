// Index.ios.js - place code in here for iOS

// Props - pass data from parent to child component
// State - component's internal record keeping

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
// JS function that returns JSX
const App = () =>  (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
// Takes JSX gets returned and decides what content should appear on
// Must register at least one component for every RN application
AppRegistry.registerComponent('albums', () => App);
