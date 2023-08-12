import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

const Item = ({title, navigation, item}) => {
  //console.log(item, 'itemTitle');
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {navigation, item});
      }}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const RelavantCpProducts = ({navigation, item1}) => {
  console.log(item1,"dataINRelavantCpProduc")
  //console.log(item1.crop, item1.crop_protection_products, 'ProductDetails');
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={item1.crop_protection_products}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {navigation, item, item1});
              }}>
              <View style={styles.item}>
                <View style={{flex:0.7}}>
                <Text style={styles.title}>{item.product_name}</Text>
                </View>
                <View>
                <Text style={{fontSize:16}}>{item.productType}</Text>
                </View>
                {/* <Text style={styles.title}>{item.product_name}</Text>
                <Text style={{fontSize:16}}>{item.productType}</Text> */}
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={items => items.title}
      />
    </SafeAreaView>
  );
};

export default RelavantCpProducts;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      flex:1,
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
