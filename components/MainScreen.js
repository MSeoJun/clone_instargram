import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet } from "react-native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Icon} from "native-base"
import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';

const Tab = createMaterialBottomTabNavigator();

export default function MainScreen ({navigation}) {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Icon name="camera" style={{ paddingLeft: 10 }} />
          ),
          title: 'Instargram',
          headerRight: () => (
            <Icon name="send" style={{ paddingRight: 10 }} />
          )      
        });
      }, [navigation]);

  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'white'}}
      activeColor="#000"
      inactiveColor="#d1cece"
    >
      <Tab.Screen name="HomeTab" component={HomeTab} options={{
          tabBarIcon: ({color}) => (
              <Icon name="home" style={{color: color}} />
          )
      }} />
      <Tab.Screen name="SearchTab" component={SearchTab} options={{
          tabBarIcon: ({color}) => (
              <Icon name="search" style={{color: color}} />
          )
      }}  />
      <Tab.Screen name="AddMediaTab" component={AddMediaTab} options={{
          tabBarIcon: ({color}) => (
              <Icon name="add-circle" style={{color: color}} />
          )
      }}  />
      <Tab.Screen name="LikesTab" component={LikesTab} options={{
          tabBarIcon: ({color}) => (
              <Icon name="heart" style={{color: color}} />
          )
      }}  />
      <Tab.Screen name="ProfileTab" component={ProfileTab} options={{
          tabBarIcon: ({color}) => (
              <Icon name="person" style={{color: color}} />
          )
      }}  />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});