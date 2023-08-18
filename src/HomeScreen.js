import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Hackthon from './../jsonFile/Hackthon.json';
import ProductJSON from './../jsonFile/productJSON.json'
import stylesFile from './styles';

// const Item = ({title, navigation, item}) => (
//   <TouchableOpacity
//     onPress={() => {
//       navigation.navigate('Profile', {item});
//     }}>
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   </TouchableOpacity>
// );

export const gettingCropList = data => {
  const cropsList = data.filter(
    (thing, index, self) =>
      index === self.findIndex(t => t.cropName === thing.cropName),
  );
  return cropsList;
};

export const formatData = (data, numColumns) => {
  // it will adjust the alignment of crop cards if all the columns not contains same number of crop cards
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push('');
    numberOfElementsLastRow++;
  }

  return data;
};

const Item = ({title, navigation, item}) => {
  return item.length !== 0 ? (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Profile', {item});
      }}
      style={[stylesFile.cardBox, stylesFile.shadowProps]}>
      <View style={stylesFile.ImageViewStyle}>
        <View style={stylesFile.cropImageTagViewStyle}>
          <Image
            source={{
              uri: `https://vegetables.bayer.com${item.image}`,
            }}
            style={[stylesFile.imageTagStyles]}
          />
        </View>
      </View>
      <View style={stylesFile.CropCardTextAlign}>
        <Text style={stylesFile.textStyle}>{item.crop.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <View style={[stylesFile.cardBox, stylesFile.transparentCropCard]} />
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={stylesFile.vegComponentsView}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={formatData(ProductJSON.Products, 3)}
          renderItem={({item}) => (
            <Item title={item.crop} navigation={navigation} item={item} />
          )}
          keyExtractor={item => item.crop}
          numColumns={2}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
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

export default HomeScreen;
