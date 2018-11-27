import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/components/Auth';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from './src/actions'; //Import your actions

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Coucou</Text>
        <Auth />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
