import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import stylesFile from './styles';

const Variants = ({item1, navigation}) => {
  console.log(item1, 'dataINVarian');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={item1.variants}
        renderItem={({item}) => {
          return (
            <View
              style={[
                stylesFile.cardBoxForProductCard,
                stylesFile.shadowProps,
              ]}>
              <View style={stylesFile.productAndBrandAlign}>
                <View style={stylesFile.productTextView}>
                  <Text style={stylesFile.productTextStyles} numberOfLines={1}>
                    {item.title}
                  </Text>
                </View>
                <View style={stylesFile.BrandTextView}>
                  <Text style={stylesFile.brandTextStyles}>DE RUITER</Text>
                </View>
              </View>
              <View style={stylesFile.imageView}>
                {/* {itemData.productImageProductCard === '' ? (
                    console.log('noImage')
                  ) : ( */}
                <View style={stylesFile.productImageTagViewStyles}>
                  <Image
                    source={{
                      uri: `https://vegetables.bayer.com${item1.image}`,
                    }}
                    style={stylesFile.imageTagStyles}
                  />
                </View>
                {/* )} */}
              </View>
            </View>
          );
        }}
        keyExtractor={items => items.title}
      />
    </SafeAreaView>
  );
};

export default Variants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin: 12,
    // backgroundColor:'red'
  },
  item: {
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    alignItems: 'center',
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
  },
});
