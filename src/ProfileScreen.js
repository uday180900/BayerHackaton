import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RelavantCpProducts from './RelavantCpProducts';
import Variants from './Variants';
import BackButton from '../SVGicons/backButton.svg';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const ProfileScreen = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'green',
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <View style={styles.headerLeft}>
            <Text style={{color: 'white'}}>Back</Text>
            <Text style={styles.backButtonTextStyle}>
              {route.params.item.crop.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, route.params.item.crop]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Variants">
        {props => (
          <Variants item1={route.params.item} navigation={navigation} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Relavant Cp Products">
        {props => (
          <RelavantCpProducts
            navigation={navigation}
            item1={route.params.item}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  backButtonTextStyle: {
    marginLeft: 16,
    color: 'white',
    fontSize: 24,
  },
});
