/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AccueilContact from './src/component/AccueilContact';
import DetailsContact from './src/component/DetailsContact';


const Stack = createStackNavigator();

function Acceuil({navigation}) {
  return <AccueilContact navigation={navigation} />;
}
function Details({navigation, route}) {
  navigation.setOptions({title: route.params.name});
  return <DetailsContact student={route.params} navigation={navigation} />;
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Liste Contact"
            component={Acceuil}
            options={{
              //headerMode: 'none',
              headerShown: true,
              headerStyle: {
                backgroundColor: 'grey',
              },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
              name="DetailsContact"
              component={Details}
              options={{
                //headerMode: 'none',
                headerShown: true,
                headerStyle: {
                  backgroundColor: 'grey',
                },
                headerTintColor: 'white',
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
