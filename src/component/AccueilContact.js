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
    this.state.listcontact = contacts;
    this._onPress = this._onPress.bind(this);
  }
  _onPress(item) {
    this.props.navigation.navigate('Details Contact', {
      list: item,
    });
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex: 1,
            }}>
            <View>
              <FlatList
                data={this.state.listcontact}
                renderItem={({item}) => (
                  <TouchableOpacity
                    key={'contact_' + item.id}
                    onPress={() => this._onPress(item)}>
                    <View>
                      <View
                        style={{
                          backgroundColor: 'black',
                          borderBottomColor: 'white',
                          borderBottomWidth: 1,
                          flexDirection: 'row',
                        }}>
                        <View />
                        <Image
                          source={require('../img/unnamed.png')}
                          style={{
                            width: 60,
                            height: 60,
                            marginBottom: 20,
                            borderRadius: 30,
                            marginTop: 20,
                          }}
                        />
                        <View>
                          <Text
                            style={{
                              color: 'white',
                              marginLeft: 20,
                              marginTop: 20,
                              fontSize: 20,
                            }}>
                            {item.lastName + '-' + item.firstName}
                          </Text>
                          <Text
                            style={{
                              color: 'white',
                              marginBottom: 20,
                              marginLeft: 20,
                              fontSize: 10,
                            }}>
                            {item.city}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
