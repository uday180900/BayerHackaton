import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import productJson from '../jsonFile/productJSON.json';

const Item = ({title, navigation, item}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Profile', {item});
    }}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productJson.Products}
        renderItem={({item}) => (
          <Item title={item.crop} navigation={navigation} item={item} />
        )}
        keyExtractor={item => item.crop}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 60,
    borderWidth: 1,
    alignItems: 'center',
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3, 
    borderRadius:8 
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreen;
