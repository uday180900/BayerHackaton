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
import FungicideImage from './../SVGicons/Fungicide_default.svg';
import {SvgCss} from 'react-native-svg';

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
  console.log(item1, 'dataINRelavantCpProduc');
  //console.log(item1.crop, item1.crop_protection_products, 'ProductDetails');
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={item1.crop_protection_products}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {navigation, item, item1});
                }}>
                {/* <View style={styles.item}>
                  <View style={{flex: 0.7}}>
                    <Text style={styles.title}>{item.product_name}</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 16}}>{item.productType}</Text>
                  </View>
                </View> */}

                <View
                  style={[
                    stylesFile.cardBoxForProductCard,
                    stylesFile.shadowProps,
                  ]}>
                  <View style={stylesFile.productAndBrandAlign}>
                    <View style={stylesFile.productTextView}>
                      <Text
                        style={stylesFile.productTextStyles}
                        numberOfLines={1}>
                        {item.product_name}
                      </Text>
                    </View>
                    <View style={stylesFile.BrandTextView}>
                      <Text style={stylesFile.brandTextStyles}>
                        {item.productType}
                      </Text>
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
                      {/* <FungicideImage /> */}
                      {/* <SvgCss xml={FungicideImage} /> */}
                    </View>
                    {/* )} */}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={items => items.title}
        />
      </SafeAreaView>
    </View>
  );
};

export default RelavantCpProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 12,
  },
  item: {
    flex: 1,
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
