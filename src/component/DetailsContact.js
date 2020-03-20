/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';

import {contacts} from '../../datas';

export default class AccueilContact extends Component {
  state = {
    listcontact: [],
  };
  constructor(props) {
    super(props);
    console.log(props);
    this.state.listcontact = contacts;
    this._onPress = this._onPress.bind(this);
  }
  _onPress(item) {
    this.props.navigation.navigate('DetailsContact', {
      list: item,
    });
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <Text style={{fontSize: 40}}>
            {' '}
            Salut Batiste, désolé j'ai pas eu le Temps de faire cette page :(
          </Text>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
