import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';

const DetailsScreen = ({navigation, route}) => {
  //console.log(route.params, 'detailsInfo');
  const item = route.params.item1;
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'green',
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            //navigation.goBack();
            navigation.navigate('Profile', {item});
          }}>
          <View style={styles.headerLeft}>
            <Text style={{color: 'white'}}>Back</Text>
            <Text style={styles.backButtonTextStyle}>
              {route.params.item.product_name.toUpperCase()}
            </Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [item, navigation, route.params.item.product_name]);
  return (
    <View style={{flex: 1, padding: 8}}>
      <FlatList
        data={route.params.item.characterisitics}
        renderItem={({item}) => {
          return (
            <View style={{marginVertical: 8}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                {item.title}
              </Text>
              <Text style={{fontSize: 14, marginTop : 2}}> {item.value} </Text>
            </View>
          );
        }}
        keyExtractor={items => items.title}
      />
      {/* </SafeAreaView> */}
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
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
